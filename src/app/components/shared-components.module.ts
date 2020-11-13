import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrawerComponent} from "./drawer/drawer.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    IonicModule // agar dapat menggunakan Ionic UI component
  ],
  exports: [DrawerComponent]
})
export class SharedComponentsModule { }
