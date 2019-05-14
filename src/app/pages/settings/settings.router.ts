import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorSettings } from './settings';

const routes: Routes = [
  {
    path: '',
    component: WorSettings,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
      },
      {
        path: 'password',
        loadChildren: './password/password.module#PasswordModule',
      },
      {
        path: 'security',
        loadChildren: './security/security.module#SecurityModule',
      },
    ],
  },
];
export const SettingsRouter = RouterModule.forChild(routes);
