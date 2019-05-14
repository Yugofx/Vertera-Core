import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorMarket } from './market';

const routes: Routes = [
  {
    path: '',
    component: WorMarket,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buy',
      },
      {
        path: 'buy',
        loadChildren: './buy/buy.module#MarketBuyModule',
      },
      {
        path: 'sell',
        loadChildren: './sell/sell.module#MarketSellModule',
      },
      {
        path: 'history',
        loadChildren: './history/history.module#MarketHistoryModule',
      },
    ],
  },
];
export const MarketRouter = RouterModule.forChild(routes);
