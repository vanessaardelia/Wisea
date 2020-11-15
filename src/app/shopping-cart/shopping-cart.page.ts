import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WisataDetail } from '../model/wisata-detail.interface';
import { WisataService } from '../service/wisata.service';
import { map } from 'rxjs/operators';
import {AngularFireStorage} from "@angular/fire/storage";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  public wisataList: Observable<WisataDetail>
  public imageDetail: Observable<string>;
  public shopCart = new Observable<History>();
  cartItems: any[] = [];
  total: number;
  qty: number;
  max: number;

  constructor(
    private route: ActivatedRoute,
    private wisataService: WisataService,
    private storage: AngularFireStorage,
    public localStorage: Storage
  ) { }

  ngOnInit() {
    const wisataId = this.route.snapshot.paramMap.get('id');
    this.wisataList = this.wisataService.getWisataDetail(wisataId).pipe(
      map(wisataList => {
        this.imageDetail = new Observable<string>();
        wisataList.gambarUrl = new Observable<string[]>();
        wisataList.gambar.forEach((gambar, index) => {
          this.imageDetail[index] = this.getImageUrl(gambar);
        });
        this.max = wisataList.tiketTerjual;
        return wisataList;
      })
    );
    this.total = 0;
    this.qty = 1;
  }

  getImageUrl(imageName) {
    return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  incrementQty() {
    this.qty++;
    if(this.qty > this.max) {
      this.qty = this.max;
    }
  }

  decrementQty() {
    this.qty--;
    if(this.qty < 1) {
      this.qty = 1;
    }
  }

}
