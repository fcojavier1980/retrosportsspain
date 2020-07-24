import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
	    {
	        path: '',
	        redirectTo: 'home',
	        pathMatch: 'full'
	    },
{ path: 'futbol', loadChildren: () => import('./components/pages/futbol/futbol.module').then(m => m.FutbolModule) },
{ path: 'nfl', loadChildren: () => import('./components/pages/nfl/nfl.module').then(m => m.NflModule) },
{ path: 'basket', loadChildren: () => import('./components/pages/basket/basket.module').then(m => m.BasketModule) },
{ path: 'boxeo', loadChildren: () => import('./components/pages/boxeo/boxeo.module').then(m => m.BoxeoModule) },
{ path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
