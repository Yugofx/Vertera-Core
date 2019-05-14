import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorTransferAction } from './action';

const routes: Routes = [
  {
    path: '',
    component: WorTransferAction,
  },
];
export const TransferActionRouter = RouterModule.forChild(routes);
