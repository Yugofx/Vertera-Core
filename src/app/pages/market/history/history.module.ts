import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MarketHistoryRouter } from './history.router';
import { WorMarketHistory } from './history';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarketHistoryRouter,
  ],
  declarations: [WorMarketHistory],
})
export class MarketHistoryModule {}
