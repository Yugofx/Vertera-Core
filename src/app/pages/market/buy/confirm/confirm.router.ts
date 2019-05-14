import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorMarketBuyConfirm } from './confirm';

const routes: Routes = [
  {
    path: '',
    component: WorMarketBuyConfirm,
  },
];
export const MarketBuyConfirmRouter = RouterModule.forChild(routes);
