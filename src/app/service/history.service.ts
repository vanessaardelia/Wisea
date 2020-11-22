import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  addHistory(jumlah: number, nama: string, tanggal: Date, tiket: string, total: number, email: string, tlp: string, open: boolean){ 
    const id = this.firestore.createId();
    const status = 'terbayar'

    return this.firestore.doc(`history/${id}`).set({
      jumlah,
      nama,
      status,
      tanggal,
      tiket,
      total,
      email,
      tlp,
      open
    });
  }
}
