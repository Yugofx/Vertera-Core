import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MarketSellRouter } from './sell.router';
import { WorMarketSell } from './sell';
import { WorMarketSellCardComponent } from './card/card.component';
import { WorMarketSellTransferComponent } from './transfer/transfer.component';
import { WorMarketSellOfficeComponent } from './office/office.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

const ENRIES = [
  WorMarketSellCardComponent,
  WorMarketSellTransferComponent,
  WorMarketSellOfficeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MarketSellRouter,
  ],
  declarations: [
    WorMarketSell,
    ...ENRIES,
  ],
  entryComponents: [
    ...ENRIES
  ],
})
export class MarketSellModule {}
