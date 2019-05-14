import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { SharedModule } from '../app/shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { SelectPageComponent } from './select-page/select-page.component';
import { ClickOutsideModule } from 'ng-click-outside';

import { SandboxComponent } from './sandbox.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { InputPageComponent } from './input-page/input-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { CheckboxPageComponent } from './checkbox-page/checkbox-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { TabsPageComponent } from './tabs-page/tabs-page.component';
import { WorSelect } from '../app/shared/select/select';
import { WorCard } from '../app/shared/card/card';
import { MeterPageComponent } from './meter-page/meter-page.component';

@NgModule({
  declarations: [
    SandboxComponent,
    ButtonPageComponent,
    InputPageComponent,
    SelectPageComponent,
    InputPageComponent,
    TablePageComponent,
    CheckboxPageComponent,
    CardPageComponent,
    TabsPageComponent,
    MeterPageComponent,
  ],
  imports: [
    BrowserModule,
    SandboxRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
  ],
  providers: [],
  bootstrap: [SandboxComponent],
  entryComponents: [WorCard, WorSelect],
})
export class SandboxModule {}
