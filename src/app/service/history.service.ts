import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import History from '../model/history';
import {Observable} from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  addHistory(jumlah: number, nama: string, tanggal: Date, tiket: string, total: number){ 
    const id = this.firestore.createId();
    const status = 'terbayar'

    return this.firestore.doc(`history/${id}`).set({
      jumlah,
      nama,
      status,
      tanggal,
      tiket,
      total
    });
  }
}
