import { NgModule } from '@angular/core';
import {
  SignupCompanyRouter,
} from './company.router';
import { WorSignupCompany } from './company';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SignupCompanyRouter
  ],
  declarations: [
    WorSignupCompany
  ],
})
export class SignupCompanyModule {}
