import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import History from '../model/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historiesRef: AngularFirestoreCollection<History> = null;

  constructor(private firestore: AngularFirestore) {
  }

  // this method returns list of history document,
  // fetched from Firestore database collection
  getAll(){
    return this.firestore.collection('history').snapshotChanges();
  }
}
