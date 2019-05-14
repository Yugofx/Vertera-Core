import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule',
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignupModule',
  },
  {
    path: 'market',
    loadChildren: './pages/market/market.module#MarketModule',
  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsModule',
  },
  {
    path: 'transfer',
    loadChildren: './pages/transfer/transfer.module#TransferModule',
  },
  {
    path: 'sample',
    loadChildren: './pages/articles/sample/sample.module#SampleModule',
  },
  {
    path: '**',
    loadChildren: './pages/not-found/not-found.module#NotFoundModule',
  },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
