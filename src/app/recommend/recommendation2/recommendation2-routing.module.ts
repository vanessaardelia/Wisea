import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recommendation2Page } from './recommendation2.page';

const routes: Routes = [
  {
    path: '',
    component: Recommendation2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recommendation2PageRoutingModule {}
