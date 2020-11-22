import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
// mail
import '../../assets/js/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  addHistory(jumlah: number, nama: string, tanggal: Date, tiket: string, total: number, email: string, tlp: string, open: boolean){ 
    const id = this.firestore.createId();
    const status = 'terbayar'

    this.router.navigate([`/payment-summary/${id}`]);

    // sent to mail
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'wiseawisea1@gmail.com',
      Password : '6942257CEC67FAFE3B2218395345D90C4D47',
      To : email,
      From : 'wiseawisea1@gmail.com',
      Subject : 'Wisea payment success',
      Body : 'Payment sukses <br> yey'
    }).then(
      message => alert(message)
    );

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

  getHistoryDetail(id) {
    return this.firestore.collection('history').doc<History>(id).valueChanges();
  }
}
