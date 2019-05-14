import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorProfile } from './profile';
import { SharedModule } from '../../../shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { ProfileRouter } from './profile.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRouter,
  ],
  declarations: [WorProfile],
})
export class ProfileModule {}
