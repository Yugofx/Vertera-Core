import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorPassword } from './password';
import { SharedModule } from '../../../shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { PasswordRouter } from './password.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordRouter,
  ],
  declarations: [WorPassword],
})
export class PasswordModule {}
