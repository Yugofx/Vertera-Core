import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorMarketHistoryOrder } from './order';

const routes: Routes = [
  {
    path: '',
    component: WorMarketHistoryOrder,
  },
];
export const MarketHistoryOrderRouter = RouterModule.forChild(routes);
