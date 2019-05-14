import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupCompanyAccountRouter } from './account.router';
import { WorSignupCompanyAccount } from './account';
import { SharedModule } from '../../../../shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SignupCompanyAccountRouter,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    WorSignupCompanyAccount,
  ],
})
export class SignupCompanyAccountModule {}
