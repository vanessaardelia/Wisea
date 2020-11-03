import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recommendation3Page } from './recommendation3.page';

const routes: Routes = [
  {
    path: '',
    component: Recommendation3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recommendation3PageRoutingModule {}
