import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPersonalRouter } from './personal.router';
import { SharedModule } from '../../../shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { WorSignupPersonal } from './personal';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SignupPersonalRouter,
  ],
  declarations: [WorSignupPersonal],
})
export class SignupPersonalModule {
}
