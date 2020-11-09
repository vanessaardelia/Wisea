import { Component, OnInit } from '@angular/core';
import { WisataDetail } from '../../model/wisata-detail.interface';
import { WisataService } from '../../service/wisata.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-explore-detail',
  templateUrl: './explore-detail.page.html',
  styleUrls: ['./explore-detail.page.scss'],
})
export class ExploreDetailPage implements OnInit {
  public wisata: Observable<WisataDetail>;

  constructor(
      private wisataService: WisataService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const wisataId = this.route.snapshot.paramMap.get('id');
    this.wisata = this.wisataService.getWisataDetail(wisataId);
  }

}
