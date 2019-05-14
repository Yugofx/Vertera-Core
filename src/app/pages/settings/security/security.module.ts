import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorSecurity } from './security';
import { SharedModule } from '../../../shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { SecurityRouter } from './security.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityRouter,
  ],
  declarations: [WorSecurity],
})
export class SecurityModule {}
