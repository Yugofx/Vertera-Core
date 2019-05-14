import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorSignupCompanyLocation } from './location';

const routes: Routes = [
  {
    path: '',
    component: WorSignupCompanyLocation,
  },
];
export const SignupCompanyLocationRouter = RouterModule.forChild(routes);
