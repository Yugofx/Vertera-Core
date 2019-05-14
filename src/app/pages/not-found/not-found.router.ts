import { WorNotFound } from './not-found';
import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WorNotFound,
  },
];
export const NotFoundRouter = RouterModule.forChild(routes);
