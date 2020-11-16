import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {LoadingController} from '@ionic/angular';

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
      ) { }

  async ngOnInit() {
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


}
