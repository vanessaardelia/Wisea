import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import History from '../model/history';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getHistory(): Observable<History[]> {
    return this.firestore.collection<History>('history').valueChanges();
  }
}
