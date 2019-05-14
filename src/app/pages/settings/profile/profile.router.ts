import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorProfile } from './profile';

const routes: Routes = [
  {
    path: '',
    component: WorProfile,
  },
];
export const ProfileRouter = RouterModule.forChild(routes);
