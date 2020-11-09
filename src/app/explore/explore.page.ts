import {Component, OnInit} from '@angular/core';
import {WisataService} from '../service/wisata.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {map} from 'rxjs/operators';
import {Wisata} from '../model/wisata.interface';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  public wisataList: Observable<Wisata[]>;

  constructor(
      private wisataService: WisataService,
      private storage: AngularFireStorage,
  ) { }

  ngOnInit() {
    this.wisataList = this.wisataService.getWisata().pipe(
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
