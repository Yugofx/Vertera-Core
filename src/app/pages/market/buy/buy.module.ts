import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MarketBuyRouter } from './buy.router';
import { WorMarketBuy } from './buy';
import { WorMarketBuyMoneyComponent } from './money/money.component';
import { WorMarketBuySpzComponent } from './spz/spz.component';
import { FormsModule } from '@angular/forms';
import { WorMarketBuyConfirm } from './confirm/confirm';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MarketBuyRouter,
  ],
  declarations: [WorMarketBuy, WorMarketBuyMoneyComponent, WorMarketBuySpzComponent],
  entryComponents: [
    WorMarketBuyMoneyComponent,
    WorMarketBuySpzComponent,
  ],
})
export class MarketBuyModule {}
