import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorMarketBuyConfirm } from './confirm';
import { SharedModule } from '../../../../shared/shared.module';
import { MarketBuyConfirmRouter } from './confirm.router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarketBuyConfirmRouter,
  ],
  declarations: [WorMarketBuyConfirm],
})
export class MarketBuyConfirmModule {}
