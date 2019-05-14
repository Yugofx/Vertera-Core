import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorSettings } from './settings';
import { SharedModule } from '../../shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { SettingsRouter } from './settings.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsRouter,
  ],
  declarations: [WorSettings],
})
export class SettingsModule {
}
