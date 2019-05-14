import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorPassword } from './password';

const routes: Routes = [
  {
    path: '',
    component: WorPassword,
  },
];
export const PasswordRouter = RouterModule.forChild(routes);
