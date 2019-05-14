import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorMarketBuy } from './buy';

const routes: Routes = [
  {
    path: '',
    component: WorMarketBuy,
  },
  {
    path: 'confirm',
    loadChildren: './confirm/confirm.module#MarketBuyConfirmModule',
  },
];
export const MarketBuyRouter = RouterModule.forChild(routes);
