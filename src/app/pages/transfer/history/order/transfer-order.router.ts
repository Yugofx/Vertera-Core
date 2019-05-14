import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorTransferHistoryOrder } from './transfer-order';

const routes: Routes = [
  {
    path: '',
    component: WorTransferHistoryOrder,
  },
];
export const TransferHistoryOrderRouter = RouterModule.forChild(routes);
