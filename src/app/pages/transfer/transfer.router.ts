import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorTransfer } from './transfer';

const routes: Routes = [
  {
    path: '',
    component: WorTransfer,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'action',
      },
      {
        path: 'action',
        loadChildren: './action/action.module#TransferActionModule',
      },
      {
        path: 'history',
        loadChildren: './history/transfer-history.module#TransferHistoryModule',
      },
    ],
  },
];
export const TransferRouter = RouterModule.forChild(routes);
