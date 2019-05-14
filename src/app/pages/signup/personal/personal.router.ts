import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorSignupPersonal } from './personal';

const routes: Routes = [
  {
    path: '',
    component: WorSignupPersonal,
  },
];
export const SignupPersonalRouter = RouterModule.forChild(routes);
