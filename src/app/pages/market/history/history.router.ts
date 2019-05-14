import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorMarketHistory } from './history';
import { OrderResolverService } from './order/order.resolver';

const routes: Routes = [
  {
    path: '',
    component: WorMarketHistory,
  },
  {
    path: 'order',
    loadChildren: './order/order.module#MarketHistoryOrderModule',
    resolve: {
      order: OrderResolverService,
    },
  },
];
export const MarketHistoryRouter = RouterModule.forChild(routes);
