import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      nama: new FormControl('Thomas Imanuel', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      username: new FormControl('Thomas7209', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      email: new FormControl('thomasimanuel@gmail.com', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      telepon: new FormControl('08123455434', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
    });
  }

  onSubmit(){
    // this.contactsService.editContact(editContact);
  }

}
