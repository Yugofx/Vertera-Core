import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorSignupCompany } from './company';

const routes: Routes = [
  {
    path: '',
    component: WorSignupCompany,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account',
      },
      {
        path: 'account',
        loadChildren: './account/account.module#SignupCompanyAccountModule',
      },
      {
        path: 'details',
        loadChildren: './details/details.module#SignupCompanyDetailsModule',
      },
      {
        path: 'location',
        loadChildren: './location/location.module#SignupCompanyLocationModule',
      },
    ],
  },
];
export const SignupCompanyRouter = RouterModule.forChild(routes);
