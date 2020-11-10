import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/service/history.service';
import History from '../model/history';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  public histories: Observable<History[]>;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getHistory();
  }

  constructor(
      private historyService: HistoryService
  ) { }

  getHistory() {
    this.histories = this.historyService.getHistory().pipe(
        map(histories => histories.map(histories => {
          return histories;
        }))
    );
  }

}
