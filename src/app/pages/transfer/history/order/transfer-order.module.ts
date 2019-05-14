import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { WorTransferHistoryOrder } from './transfer-order';
import { TransferHistoryOrderRouter } from './transfer-order.router';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TransferHistoryOrderRouter,
  ],
  declarations: [WorTransferHistoryOrder],
})
export class TransferHistoryOrderModule {}
