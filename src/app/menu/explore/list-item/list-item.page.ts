import { Component, OnInit } from '@angular/core';
import {WisataService} from '../../../service/wisata.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {Wisata} from '../../../model/wisata.interface';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {
  public wisataList: Observable<Wisata[]>;

  constructor(
      private wisataService: WisataService,
      private storage: AngularFireStorage,
  ) { }

  ngOnInit() {
    this.wisataList = this.wisataService.getWisata('pertunjukan').pipe(
        map(wisataList => wisataList.map(wisata => {
          wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
          return wisata;
        }))
    );
  }

  getImageUrl(imageName) {
    return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
  }

}
