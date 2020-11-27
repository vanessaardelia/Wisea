import {Component, OnInit} from '@angular/core';
import {WisataService} from '../../service/wisata.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {map, tap} from 'rxjs/operators';
import {Wisata} from '../../model/wisata.interface';
import {LoadingController, NavController} from "@ionic/angular";
import firebase from "firebase";
import Database = firebase.database.Database;
import {DatabaseService} from "../../service/database.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  public pertunjukanList: Observable<Wisata[]>;
  public museumList: Observable<Wisata[]>;
  public workshopList: Observable<Wisata[]>;
  loading: HTMLIonLoadingElement;

  constructor(
      private wisataService: WisataService,
      private storage: AngularFireStorage,
      private navCtrl: NavController,
      private loadingController: LoadingController,
      private databaseService: DatabaseService
  ) { }

  async ngOnInit() {
    this.loading = await this.loadingController.create();
    await this.loading.present();
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
