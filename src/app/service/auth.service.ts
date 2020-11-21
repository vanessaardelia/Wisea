import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import firebase from 'firebase';

export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = null;

  constructor(
      private userAuth: AngularFireAuth,
      private userStore: AngularFirestore,
      private storage: AngularFireStorage,
  ) {
    this.userAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }

  async register(userData) {
    const credential = await this.userAuth.createUserWithEmailAndPassword(userData.email, userData.password);

    return this.userStore.doc(`users/${credential.user.uid}`).set({
      uid: credential.user.uid,
      email: userData.email,
      name: userData.name,
      username: userData.username,
      phone: userData.phone,
      photo: 'account.svg',
      balance: 0,
    });
  }

  login({ email, password }) {
    return this.userAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.userAuth.signOut();
  }

  resetPassword(email) {
    return this.userAuth.sendPasswordResetEmail(email);
  }

  async confirmResetPassword(code, password) {
    return await this.userAuth.confirmPasswordReset(code, password);
  }

  async editUserData(userData, password) {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);

    await user.reauthenticateWithCredential(credential).then(res => {
      this.userStore.doc(`users/${this.currentUser.uid}`).update({
        email: userData.email,
        name: userData.name,
        username: userData.username,
        phone: userData.phone,
        photo: userData.photo,
      });

      if (userData.email !== this.currentUser.email) {
        user.updateEmail(userData.email);
      }

      if (userData.newPassword !== null) {
        console.log('new Password: ', userData.newPassword);
        user.updatePassword(userData.newPassword);
      }
    });
  }

  getUserData(): Observable<any> {
    return this.userStore.collection('users').doc(this.currentUser.uid).valueChanges();
  }

  getUserPhotoUrl(imageName): Observable<any> {
    return this.storage.ref(`users/${imageName}`).getDownloadURL();
  }

  checkAvailablePhone(phone) {
    return this.userStore.collection('users', ref => ref.where('phone', '==', phone)).valueChanges();
  }

  async topupBalance(amount) {
   return await this.userStore.doc(`users/${this.currentUser.uid}`).update({
      balance: amount,
    });
  }
}
