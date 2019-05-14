import { NgModule } from '@angular/core';
import { WorLogin } from './login';
import { SharedModule } from '../../shared/shared.module';
import { LoginRouter } from './login.router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRouter,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    WorLogin
  ],
})
export class LoginModule {}
