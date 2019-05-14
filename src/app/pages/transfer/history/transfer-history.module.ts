import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorTransferHistory } from './transfer-history';
import { SharedModule } from '../../../shared/shared.module';
import { TransferHistoryRouter } from './transfer-history.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TransferHistoryRouter,
  ],
  declarations: [WorTransferHistory],
})
export class TransferHistoryModule {}
