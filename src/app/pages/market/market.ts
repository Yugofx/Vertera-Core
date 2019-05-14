import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wor-market',
  templateUrl: './market.html',
  styleUrls: ['./market.scss']
})
export class WorMarket implements OnInit {
  steps = [
    { route: '/market/buy', label: 'Покупка СПЗ' },
    { route: '/market/sell', label: 'Продажа СПЗ' },
    { route: '/market/history', label: 'Мои заявки' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
