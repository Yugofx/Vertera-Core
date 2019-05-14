import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  CurrencyService,
  ICurrency
} from '../../../../services/currency/currency.service';
import { Subject } from 'rxjs';
import { IMoneyInput } from '../spz/spz.component';

@Component({
  selector: 'wor-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss'],
})
export class WorMarketBuyMoneyComponent implements OnInit, OnDestroy {
  currencies: ICurrency[] = [];
  value = 0;
  activeCode: string;
  valueStream = new Subject<IMoneyInput>();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencies = this.currencyService.currencies;
  }
  
  ngOnDestroy() {
    this.valueStream.complete();
  }
  
  onInput(event) {
    this.value = Number(event.target.value);
    if (this.activeCode) {
      this.valueStream.next(this.getValue());
    }
  }
  
  onCodeChange(event) {
    this.activeCode = event;
    this.valueStream.next(this.getValue());
  }
  
  getSum(currency) {
    return currency * this.value;
  }
  
  private getValue(): IMoneyInput {
    const rate = this.currencies.find(c => c.code === this.activeCode).rate;
    return {
      total: this.getSum(rate),
      code: this.activeCode,
      spz: this.value,
    };
  }
}
