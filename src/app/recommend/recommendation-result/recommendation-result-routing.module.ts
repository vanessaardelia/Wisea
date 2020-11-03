import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationResultPage } from './recommendation-result.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendationResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationResultPageRoutingModule {}
