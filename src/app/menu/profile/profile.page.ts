import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfile: any;
  private currentPhoto: string;

  constructor(
      private authService: AuthService,
      private loadingController: LoadingController,
      private alertController: AlertController,
      ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.getUserData().subscribe(ref => {
      this.authService.getUserPhotoUrl(ref.photo).subscribe(res => {
        loading.dismiss();

        this.userProfile = ref;
        this.userProfile.photo = res;
      });
    });
  }


  async topupAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Silahkan memilih jumlah topup yang diinginkan.',
      buttons: [
        {
          text: '10.000',
          handler: () => {
            const totalAmount = this.userProfile.balance + 10000;
            this.authService.topupBalance(totalAmount);
          }
        }, {
          text: '50.000',
          handler: () => {
            const totalAmount = this.userProfile.balance + 50000;
            this.authService.topupBalance(totalAmount);
          }
        }, {
          text: '100.000',
          handler: () => {
            const totalAmount = this.userProfile.balance + 100000;
            this.authService.topupBalance(totalAmount);
          }
        }
      ]
    });

    await alert.present();
  }
}
