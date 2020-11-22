import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userProfile: any;
  historyCount: string = ''
  constructor(
    private firestore:AngularFirestore,
    private authService: AuthService
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getCountHistory();
  }

  getCountHistory() {
    this.authService.getUserData().subscribe(res => {
      this.userProfile = res;
      this.firestore.collection<History>('history').ref.where('nama', '==', this.userProfile.name).where('open', '==', false).get().then((ref) => {
        let results = ref.docs.map(doc => doc.data());
        if (results.length > 0) {
          this.historyCount = results.length.toString()
        }
        else {
          return 
        }
      });
    });
  }
}
