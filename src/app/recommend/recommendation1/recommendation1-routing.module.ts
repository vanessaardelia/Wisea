import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recommendation1Page } from './recommendation1.page';

const routes: Routes = [
  {
    path: '',
    component: Recommendation1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recommendation1PageRoutingModule {}
