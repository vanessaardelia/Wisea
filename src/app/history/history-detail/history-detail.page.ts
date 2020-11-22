import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HistoryService } from '../../service/history.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: ['./history-detail.page.scss'],
})
export class HistoryDetailPage implements OnInit {
  historyId: string;
  public historyDetail: Observable<History>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private historyService: HistoryService,
  ) { }

  ngOnInit() {
    this.historyId = this.route.snapshot.paramMap.get('id');
    this.historyDetail = this.historyService.getHistoryDetail(this.historyId);
  }

}
