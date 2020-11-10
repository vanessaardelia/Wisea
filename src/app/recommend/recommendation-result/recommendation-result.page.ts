import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recommendation-result',
  templateUrl: './recommendation-result.page.html',
  styleUrls: ['./recommendation-result.page.scss'],
})
export class RecommendationResultPage implements OnInit {
  p1; p2; p3; p4;
  wisata: Observable<any>;
  wisataCollectionRef: AngularFirestoreCollection<[]>;

  constructor(private router: Router, private storage: Storage, private firestore: AngularFirestore) {}

  ngOnInit() {}

  ionViewWillEnter(){
    this.p1 = this.storage.get('budget');
    this.p2 = this.storage.get('goWith');
    this.p3 = this.storage.get('category');
    this.p4 = this.storage.get('location');

    Promise.all([this.p1,this.p2, this.p3, this.p4]).then(arr => {
      // checking 
      if(arr[0] == null)
        this.router.navigate(['/recommendation1']);
      else if(!arr[1])
        this.router.navigate(['/recommendation2']);
      else if(!arr[2])
        this.router.navigate(['/recommendation3']);
      else if(!arr[3])
        this.router.navigate(['/recommendation4']);

      this.wisataCollectionRef = this.firestore.collection('wisata');
      this.wisata = this.wisataCollectionRef.valueChanges();
    });
  }

  tryAgain(){
    this.storage.clear();
    this.router.navigate(['/']);
  }
}
