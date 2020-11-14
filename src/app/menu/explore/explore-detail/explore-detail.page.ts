import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { WisataDetail } from '../../../model/wisata-detail.interface';
import { WisataService } from '../../../service/wisata.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-explore-detail',
  templateUrl: './explore-detail.page.html',
  styleUrls: ['./explore-detail.page.scss'],
})
export class ExploreDetailPage implements OnInit {
  public wisataDetail: Observable<WisataDetail>;
  public imageDetail: Observable<string[]>;
  backdropVisibile = false;

  constructor(
      private wisataService: WisataService,
      private route: ActivatedRoute,
      private storage: AngularFireStorage,
      private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const wisataId = this.route.snapshot.paramMap.get('id');
    // this.wisataDetail = this.wisataService.getWisataDetail(wisataId);

    this.wisataDetail = this.wisataService.getWisataDetail(wisataId).pipe(
        map(wisataDetail => {
          this.imageDetail = new Observable<string[]>();
          wisataDetail.gambarUrl = new Observable<string[]>();
          wisataDetail.gambar.forEach((gambar, index) => {
            this.imageDetail[index] = this.getImageUrl(gambar);
          });
          return wisataDetail;
        })
    );
  }

  getImageUrl(imageName) {
    return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  toggleBackdrop(isVisibile) {
    this.backdropVisibile = isVisibile;
    this.changeDetectorRef.detectChanges(); // agar Angular mengecek kembali, ketika di-swipe muncul drawer dan backdrop diaktifkan
  }

}
