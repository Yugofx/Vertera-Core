import { Component } from '@angular/core';

@Component({
  selector: 'wor-user-widget',
  templateUrl: './user.widget.html',
  styleUrls: ['./user.widget.scss'],
})
export class WorUserWidget {
  // TODO: add user service
  data = [
    { name: 'Кошелёк', value: '1847 7312 7293' },
    { name: 'Баланс', value: '19 823 СПЗ' },
    { name: 'Последний вход', value: '7.09.2017' },
    { name: 'IP', value: '201.12.43.105.284' },
  ];
  name = 'Юрий';

  constructor() {}
}
