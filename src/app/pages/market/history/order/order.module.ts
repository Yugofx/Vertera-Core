import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { MarketHistoryOrderRouter } from './order.router';
import { WorMarketHistoryOrder } from './order';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarketHistoryOrderRouter,
  ],
  declarations: [WorMarketHistoryOrder],
})
export class MarketHistoryOrderModule {}
