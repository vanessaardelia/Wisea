import {Component, OnInit} from '@angular/core';
import {WisataService} from '../../service/wisata.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {map} from 'rxjs/operators';
import {Wisata} from '../../model/wisata.interface';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  public pertunjukanList: Observable<Wisata[]>;
  public museumList: Observable<Wisata[]>;
  public workshopList: Observable<Wisata[]>;

  constructor(
      private wisataService: WisataService,
      private storage: AngularFireStorage,
      private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.pertunjukanList = this.wisataService.getWisata('pertunjukan').pipe(
        map(wisataList => wisataList.map(wisata => {
          wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
          return wisata;
        }))
    );
    this.museumList = this.wisataService.getWisata('museum').pipe(
        map(wisataList => wisataList.map(wisata => {
          wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
          return wisata;
        }))
    );
    this.workshopList = this.wisataService.getWisata('workshop').pipe(
        map(wisataList => wisataList.map(wisata => {
          wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
          return wisata;
        }))
    );
  }

  getImageUrl(imageName) {
    return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  goToListItem($event, order) {
    this.navCtrl.navigateForward(`/menu/tabs/explore/list-item/${order}`);
  }

}
