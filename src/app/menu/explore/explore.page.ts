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
import { IonSlides } from '@ionic/angular';
import {AngularFirestore} from "@angular/fire/firestore";
import {AuthService} from "../../service/auth.service";

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
  userProfile: any;
  historyCount: string = '';

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  constructor(
      private wisataService: WisataService,
      private storage: AngularFireStorage,
      private navCtrl: NavController,
      private loadingController: LoadingController,
      private databaseService: DatabaseService,
      private firestore: AngularFirestore,
      private authService: AuthService
  ) { }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

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

  ionViewWillEnter() {
      this.authService.getUserData().subscribe(res => {
          this.userProfile = res;
          this.firestore.collection<History>('history').ref.where('email', '==', this.userProfile.email).where('open', '==', false).get().then((ref) => {
              let results = ref.docs.map(doc => doc.data());
              if (results.length > 0) {
                  this.historyCount = results.length.toString()
              }
              else {
                  return;
              }
          });
      });
  }

  getImageUrl(imageName) {
    return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  goToListItem($event, order) {
    this.navCtrl.navigateForward(`/menu/tabs/explore/list-item/${order}`);
  }

}
