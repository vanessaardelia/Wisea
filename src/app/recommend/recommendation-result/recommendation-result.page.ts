import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { WisataService } from 'src/app/service/wisata.service';
import { map } from 'rxjs/operators';
import { Wisata } from 'src/app/model/wisata.interface';
import { getLocaleDateFormat } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recommendation-result',
  templateUrl: './recommendation-result.page.html',
  styleUrls: ['./recommendation-result.page.scss'],
})
export class RecommendationResultPage implements OnInit {
  public budget: string;
  public time: any;
  public category: string;
  public location: string;
  p1; p2; p3; p4;
  public recommendResult: Wisata[];
  public array: any;
  // public jam: any;

  public wisataList: Observable<Wisata[]>;

  constructor(
    private router: Router, 
    private storage: Storage, 
    private toastController: ToastController,
    private wisataService: WisataService,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit() {   
  }

  ionViewWillEnter(){
    this.recommendResult = [];
    this.getLocalData();

    this.p1 = this.storage.get('budget');
    this.p2 = this.storage.get('time');
    this.p3 = this.storage.get('category');
    this.p4 = this.storage.get('location');

    this.array = Promise.all([this.p1,this.p2, this.p3, this.p4]).then(arr => {
      // checking 
      if(arr[0] == null){
        this.presentToast();
        this.router.navigate(['/recommendation1']);
      }
      else if(!arr[1]){
        this.presentToast();
        this.router.navigate(['/recommendation2']);
      }
      else if(!arr[2]){
        this.presentToast();
        this.router.navigate(['/recommendation3']);
      }
      else if(!arr[3]){
        this.presentToast();
        this.router.navigate(['/recommendation4']);
      }

      this.wisataService.getWisata().subscribe(res => 
        res.map(m => {
          // this.jam = ;
          if(m.kategori == arr[2] && m.kota == arr[3] && arr[1] == 'pagi' && arr[0] == 'less'){
            if(m.harga <= 100000 && m.jam.getTime() >= 14400000 && m.jam.getTime() < 36000000){
              console.log(m.jam.getTime());
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else if(m.kategori == arr[2] && m.kota == arr[3] && arr[1] == 'siang' && arr[0] == 'less'){
            if(m.harga <= 100000 && m.jam >= 36000000 && m.jam < 57600000){
              console.log(m.jam.getTime());
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else if(m.kategori == arr[2] && m.kota == arr[3] && arr[1] == 'sore' && arr[0] == 'less'){
            if(m.harga <= 100000 && m.jam.getTime() >= 57600000 && m.jam.getTime() < 72000000){
              console.log(m.jam.getTime());
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else if(m.kategori == arr[2] && m.kota == arr[3] && arr[1] == 'malam' && arr[0] == 'less'){
            if(m.harga <= 100000 && m.jam.getTime() >= 72000000 && m.jam.getTime() < 14400000){
              console.log(m.jam.getTime());
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else{
            var timestamp = m.jam;
            var date = new Date(timestamp*1000);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            var waktu = new Date();
            console.log(timestamp);

            console.log(waktu.setHours(hours, minutes, seconds));
            console.log(waktu.setHours(hours, minutes, seconds));
          }

          console.log(res.length);
        })
      );

      // this.wisataList = this.wisataService.getWisata();
      
    });
  }

  getLocalData(){
    this.storage.get('budget').then((val) => {
      this.budget = val;
    });
    this.storage.get('time').then((val) => {
      this.time = val;
    });
    this.storage.get('category').then((val) => {
      this.category = val;
    });
    this.storage.get('location').then((val) => {
      this.location = val;
    });      
    
  }
  
  getImageUrl(imageName) {
    return this.fireStorage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  tryAgain(){
    this.storage.clear();
    this.router.navigate(['/']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Pilih dahulu opsi berikut.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}
