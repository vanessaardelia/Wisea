import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cartCollection: AngularFirestoreCollection<any>; //Firestore collection
  historyCount: string = ''
  constructor(private firestore:AngularFirestore) {}

  ionViewWillEnter() {
    this.firestore.collection('history').valueChanges().subscribe( values => {
      this.historyCount = values.length.toString()
    });
  }
}
