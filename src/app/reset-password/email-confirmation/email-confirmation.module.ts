import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailConfirmationPageRoutingModule } from './email-confirmation-routing.module';

import { EmailConfirmationPage } from './email-confirmation.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EmailConfirmationPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [EmailConfirmationPage]
})
export class EmailConfirmationPageModule {}
