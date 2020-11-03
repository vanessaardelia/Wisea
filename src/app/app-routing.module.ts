import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recommendation1',
    loadChildren: () => import('./recommend/recommendation1/recommendation1.module').then( m => m.Recommendation1PageModule)
  },
  {
    path: 'recommendation2',
    loadChildren: () => import('./recommend/recommendation2/recommendation2.module').then( m => m.Recommendation2PageModule)
  },
  {
    path: 'recommendation3',
    loadChildren: () => import('./recommend/recommendation3/recommendation3.module').then( m => m.Recommendation3PageModule)
  },
  {
    path: 'recommendation4',
    loadChildren: () => import('./recommend/recommendation4/recommendation4.module').then( m => m.Recommendation4PageModule)
  },
  {
    path: 'recommendation-result',
    loadChildren: () => import('./recommend/recommendation-result/recommendation-result.module').then( m => m.RecommendationResultPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
