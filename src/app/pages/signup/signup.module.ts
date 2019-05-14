import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRouter } from './signup.router';
import { WorSignup } from './signup';
import { SharedModule } from '../../shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SignupRouter,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    WorSignup,
  ],
})
export class SignupModule {}
