import { Component } from '@angular/core';

import {AlertController, LoadingController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private userAuth: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menuRadius();
    });
  }

  menuRadius() {
    setTimeout(() => {
      document.querySelector('ion-menu').shadowRoot.querySelector('.menu-inner').setAttribute('style', 'border-radius:0px 30px 30px 0px');
    }, 200);
  }

  async logout() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.userAuth.logout().then(() => {
      loading.dismiss();
    });
    return this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async logoutAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Logout',
      subHeader: 'Yahh... Yakin nih mau keluar?',
      message: `<img src="https://www.clipartmax.com/png/middle/64-644307_sad-emoji-png-clipart-sad-emoji-png-clipart.png"></img>`,
      buttons: [
        {
          text: 'Gajadi deh, demi kamu...',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ntar pasti login lagi kok!',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }
}
