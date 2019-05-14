import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorSignupCompanyAccount } from './account';

const routes: Routes = [
  {
    path: '',
    component: WorSignupCompanyAccount,
  }
];
export const SignupCompanyAccountRouter = RouterModule.forChild(routes);
