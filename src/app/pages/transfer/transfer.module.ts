import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TransferRouter } from './transfer.router';
import { WorTransfer } from './transfer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TransferRouter,
  ],
  declarations: [WorTransfer],
})
export class TransferModule {}
