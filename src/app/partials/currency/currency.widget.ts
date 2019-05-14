import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wor-currency-widget',
  templateUrl: './currency.widget.html',
  styleUrls: ['./currency.widget.scss'],
})
export class WorCurrencyWidget implements OnInit {
  currencies = [
    { rate: 1.4, code: 'USD' },
    { rate: 92.47, code: 'RUB' },
    { rate: 1.2, code: 'EUR' },
    { rate: 1.07, code: 'GBP' },
    { rate: 1.36, code: 'CHF' },
    { rate: 9.66, code: 'CNY' },
    { rate: 158.59, code: 'JPY' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
