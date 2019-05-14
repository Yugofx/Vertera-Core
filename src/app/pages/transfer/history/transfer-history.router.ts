import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorTransferHistory } from './transfer-history';
import { TransferOrderResolverService } from './order/transfer-order.resolver';

const routes: Routes = [
  {
    path: '',
    component: WorTransferHistory,
  },
  {
    path: 'order',
    loadChildren: './order/transfer-order.module#TransferHistoryOrderModule',
    resolve: {
      order: TransferOrderResolverService,
    },
  },
];
export const TransferHistoryRouter = RouterModule.forChild(routes);
