import {
  RouterModule,
  Routes
} from '@angular/router';
import { SampleComponent } from './sample';

const routes: Routes = [
  {
    path: '',
    component: SampleComponent,
  },
];
export const SampleRouter = RouterModule.forChild(routes);
