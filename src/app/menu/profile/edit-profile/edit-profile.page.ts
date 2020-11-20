import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  form: FormGroup;
  userProfile: any;
  currentPhoto: any;

  constructor(
      private authService: AuthService,
      private loadingController: LoadingController,
      private alertController: AlertController,
      private router: Router,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.getUserData().subscribe(ref => {
      this.authService.getUserPhotoUrl(ref.photo).subscribe(res => {
        loading.dismiss();

        this.userProfile = ref;
        this.currentPhoto = ref.photo;
        this.userProfile.photo = res;
      });
    });

    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email]
      }),
      phone: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(12)]
      }),
      photo: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      newPassword: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.minLength(6)]
      }),
    });
  }

  async edit(confirmPassword) {
    const loading = await this.loadingController.create();
    await loading.present();
    this.form.value.photo = this.currentPhoto;

    await this.authService.editUserData(this.form.value, confirmPassword).then(() => {
      loading.dismiss();
      this.router.navigateByUrl('/menu/tabs/profile', { replaceUrl: true });
    }, async err => {
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Edit profile gagal',
        message: err.message,
        buttons: ['OK'],
      });

      await alert.present();
    });
  }

  async confirmationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Konfirmasi perubahan data diri',
      subHeader: 'Silahkan masukkan password anda.',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          cssClass: 'specialClass',
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            this.edit(data.password);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }
      ]
    });

    await alert.present();
  }
}
