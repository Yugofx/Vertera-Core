import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { TransferActionRouter } from './action.router';
import { WorTransferAction } from './action';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TransferActionRouter,
  ],
  declarations: [WorTransferAction],
})
export class TransferActionModule {}
