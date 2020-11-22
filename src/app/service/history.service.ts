import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  
  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  getHistoryDetail(detailId): Observable<History> {
    return this.firestore.collection('history').doc<History>(detailId).valueChanges();
  }

  addHistory(jumlah: number, nama: string, tanggal: Date, tiket: string, total: number, email: string, tlp: string, open: boolean){ 
    const id = this.firestore.createId();
    const status = 'terbayar'
    this.router.navigate([`./payment-summary/${id}`]);

    return this.firestore.doc(`history/${id}`).set({
      jumlah,
      nama,
      status,
      tanggal,
      tiket,
      total,
      email,
      tlp,
      open,
      id
    });
  }
}
