import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/service/history.service';
import History from '../model/history';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  public histories: any;
  userProfile: any;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getHistory();
  }

  constructor(
      private historyService: HistoryService,
      private authService: AuthService,
      private firestore: AngularFirestore
  ) { }

  getHistory() {
    this.authService.getUserData().subscribe(res => {
      this.userProfile = res;
      this.firestore.collection<History>('history').ref.where('nama', '==', this.userProfile.name).get().then((ref) => {
        let results = ref.docs.map(doc => doc.data());
        if (results.length > 0) {
          this.histories = results
        }
        else {
          return 
        }
      });
    });
  }

}
