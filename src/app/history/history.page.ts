import { Component, OnInit } from '@angular/core';
import History from '../model/history';
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
  historyCount: number;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getHistory();
  }

  constructor(
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
          this.historyCount = 0
        }
      });
    });
  }

  goToHistoryDetail(historyId) {
    this.firestore.collection('history').doc<History>(historyId).update({
      open: true
    });
  }

}
