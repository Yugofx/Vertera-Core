import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CurrencyService } from '../../../../services/currency/currency.service';
import { Subject } from 'rxjs';
import { IPaymentOption } from '../../../../services/market/market.service';

export interface IMoneyInput {
  total: number;
  code: string;
  spz?: number;
}

@Component({
  selector: 'wor-spz',
  templateUrl: './spz.component.html',
  styleUrls: ['./spz.component.scss'],
})
export class WorMarketBuySpzComponent implements OnInit, OnDestroy {
  currencies = [];
  private total = 0;
  private code: string;
  valueStream = new Subject<IMoneyInput>();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencies = this.currencyService.currencies;
  }
  
  ngOnDestroy() {
    this.valueStream.complete();
  }
  
  onSelectCurrency(event) {
    this.code = event;
    this.valueStream.next(this.getValue());
  }
  
  onInput(event) {
    this.total = Number(event.target.value);
    if (this.code) {
      this.valueStream.next(this.getValue());
    }
  }
  
  getValue(): IMoneyInput {
    const rate = this.currencies.find(c => c.code === this.code).rate;
    return {
      total: this.total,
      code: this.code,
      spz: this.total / rate,
    };
  }
}
