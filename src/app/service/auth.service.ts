import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = null;

  constructor(private userAuth: AngularFireAuth, private userStore: AngularFirestore) {
    this.userAuth.onAuthStateChanged(user => {
      this.currentUser = user;
      console.log('Changed: ', user);
    });
  }

  async register(userData) {
    const credential = await this.userAuth.createUserWithEmailAndPassword(userData.email, userData.password);

    console.log('result: ', credential);

    return this.userStore.doc(`users/${credential.user.uid}`).set({
      uid: credential.user.uid,
      email: userData.email,
      name: userData.name,
      username: userData.username,
      phone: userData.phone,
      photo: 'default',
      balance: 0,
    });
  }

  login({ email, password }) {
    return this.userAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.userAuth.signOut();
  }

  resetPassword() {

  }
  
  getUserData() {
    return this.userStore.collection('users').doc(this.currentUser.uid).valueChanges();
  }
}
