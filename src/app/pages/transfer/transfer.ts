import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wor-transfer',
  templateUrl: './transfer.html',
  styleUrls: ['./transfer.scss', '../market/market.scss'],
})
export class WorTransfer implements OnInit {
  steps = [
    { route: '/transfer/action', label: 'Перевести' },
    { route: '/transfer/history', label: 'История переводов' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
