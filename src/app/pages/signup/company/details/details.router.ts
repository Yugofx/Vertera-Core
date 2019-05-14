import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorSignupCompanyDetails } from './details';

const routes: Routes = [
  {
    path: '',
    component: WorSignupCompanyDetails,
  }
];
export const SignupCompanyDetailsRouter = RouterModule.forChild(routes);
