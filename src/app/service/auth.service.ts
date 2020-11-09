import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from "@angular/fire/firestore";

export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = null;

  constructor(private userAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.userAuth.onAuthStateChanged(user => {
      this.currentUser = user;
      console.log('Changed: ', user);
    });
  }

  async register({ email, password }) {
    const credential = await this.userAuth.createUserWithEmailAndPassword(email, password);

    console.log('result: ', credential);
    const uid = credential.user.uid;

    return this.afs.doc(`users/${uid}`).set({
      uid,
      email: credential.user.email
    });
  }

  login({ email, password }) {
    return this.userAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.userAuth.signOut();
  }
}
