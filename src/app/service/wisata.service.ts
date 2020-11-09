import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Wisata} from '../model/wisata.interface';
import {WisataDetail} from '../model/wisata-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class WisataService {

  constructor(
      private firestore: AngularFirestore
  ) { }

  getWisata(): Observable<Wisata[]> {
    return this.firestore.collection<Wisata>('wisata').valueChanges();
  }

  getWisataDetail(wisataId): Observable<WisataDetail> {
    return this.firestore.collection('wisata').doc<WisataDetail>(wisataId).valueChanges();
  }
}
