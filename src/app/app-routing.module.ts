import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
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
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
