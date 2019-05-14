import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorMarketSell } from './sell';

const routes: Routes = [
  {
    path: '',
    component: WorMarketSell,
  },
];
export const MarketSellRouter = RouterModule.forChild(routes);
