import { Component, OnInit } from '@angular/core';
import {WisataService} from '../../../service/wisata.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {Wisata} from '../../../model/wisata.interface';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {
  public wisataList: Wisata[];
  public wisataFilter: Wisata[];

  constructor(
      private wisataService: WisataService,
      private storage: AngularFireStorage,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const order = this.route.snapshot.paramMap.get('order');
    this.getWisataList(order);
  }

  getWisataList(order = null) {
    this.wisataService.getWisata(null, order).pipe(
        map(wisataList => wisataList.map(wisata => {
          wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
          return wisata;
        }))
    ).subscribe(wisataList => {
      this.wisataList = wisataList;
      this.wisataFilter = wisataList;
    });
  }

  getImageUrl(imageName) {
    return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  async searchWisata($event) {
    const searchTerm = $event.srcElement.value;
    if (!searchTerm) {
      this.wisataFilter = this.wisataList;
      return;
    }
    this.wisataFilter = this.wisataList.filter(wisata => {
      if (wisata.nama && searchTerm) {
        return (wisata.nama.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  goToExploreDetail(wisataId) {
    this.router.navigate(['menu/tabs/explore/explore-detail', wisataId]);
  }

}
