import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recommendation4Page } from './recommendation4.page';

const routes: Routes = [
  {
    path: '',
    component: Recommendation4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recommendation4PageRoutingModule {}
