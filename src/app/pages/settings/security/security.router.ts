import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorSecurity } from './security';

const routes: Routes = [
  {
    path: '',
    component: WorSecurity,
  },
];
export const SecurityRouter = RouterModule.forChild(routes);
