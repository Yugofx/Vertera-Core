import { Routes, RouterModule } from '@angular/router';
import { WorLogin } from './login';

const routes: Routes = [
  {
    path: '',
    component: WorLogin,
  },
];

export const LoginRouter = RouterModule.forChild(routes);
