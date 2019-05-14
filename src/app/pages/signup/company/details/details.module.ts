import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorSignupCompanyDetails } from './details';
import { SharedModule } from '../../../../shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { SignupCompanyDetailsRouter } from './details.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SignupCompanyDetailsRouter,
  ],
  declarations: [
    WorSignupCompanyDetails,
  ]
})
export class SignupCompanyDetailsModule {}
