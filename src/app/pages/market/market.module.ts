import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MarketRouter } from './market.router';
import { WorMarket } from './market';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarketRouter,
  ],
  declarations: [WorMarket],
})
export class MarketModule {}
