import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorSignupCompanyLocation } from './location';
import { SharedModule } from '../../../../shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { SignupCompanyLocationRouter } from './location.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SignupCompanyLocationRouter
  ],
  declarations: [WorSignupCompanyLocation],
})
export class SignupCompanyLocationModule {}
