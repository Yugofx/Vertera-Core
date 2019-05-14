import { Component, OnInit } from '@angular/core';
import {
  CurrencyService,
  ICurrency
} from '../../../../services/currency/currency.service';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'wor-sell-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class WorMarketSellCardComponent implements OnInit {
  readonly advantages = [
    { name: 'Срок исполнения:', value: '0-3 рабочих дня' },
    { name: 'Комиссия:', value: '2.95%' },
    { name: 'На любую карту:', value: 'Visa, Mastercard и другие' },
  ];
  currencies: ICurrency[] = [];
  spzSellValue = 0;
  activeCode: string;
  total = new FormControl(0);
  
  fg = this.fb.group({
    card: new FormControl(null, Validators.required),
    save: new FormControl(false),
  });
  
  constructor(private currencyService: CurrencyService,
    private fb: FormBuilder) {}
  
  ngOnInit() {
    this.currencies = this.currencyService.currencies;
  }
  
  onInput(event) {
    this.spzSellValue = Number(event.target.value);
    this.total.patchValue(this.activeCode ? this.getTotal() : this.spzSellValue);
  }
  
  onCodeChange(event) {
    this.activeCode = event;
    this.total.patchValue(this.getTotal());
  }
  
  getSum(currency) {
    return currency * this.spzSellValue || 0;
  }
  
  getTotal() {
    const rate = this.currencies.find(c => c.code === this.activeCode).rate;
    return (rate * this.spzSellValue).toFixed(2);
  }
}
