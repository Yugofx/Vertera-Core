import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorSignup } from './signup';

const routes: Routes = [
  {
    path: '',
    component: WorSignup,
    children: [
      {
        path: 'personal',
        loadChildren: './personal/personal.module#SignupPersonalModule',
      },
      {
        path: 'company',
        loadChildren: './company/company.module#SignupCompanyModule',
      },
    ],
  },
];
export const SignupRouter = RouterModule.forChild(routes);
