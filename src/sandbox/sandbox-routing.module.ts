import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPageComponent } from './button-page/button-page.component';
import { InputPageComponent } from './input-page/input-page.component';
import { SelectPageComponent } from './select-page/select-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { CheckboxPageComponent } from './checkbox-page/checkbox-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { TabsPageComponent } from './tabs-page/tabs-page.component';
import { MeterPageComponent } from './meter-page/meter-page.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'buttons',
	},
	{
		path: 'buttons',
		component: ButtonPageComponent,
	},
  {
    path: 'inputs',
    component: InputPageComponent,
  },
  {
    path: 'tables',
    component: TablePageComponent,
  },
  {
    path: 'checkboxes',
    component: CheckboxPageComponent,
  },
  {
    path: 'cards',
    component: CardPageComponent,
  },
  {
    path: 'select',
    component: SelectPageComponent,
  },
  {
    path: 'tabs',
    component: TabsPageComponent,
  },
  {
    path: 'meter',
    component: MeterPageComponent,
  },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class SandboxRoutingModule {}
