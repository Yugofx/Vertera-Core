import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wor-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss'],
})
export class WorSettings implements OnInit {
  tabs = [
    { route: '/settings/profile', label: 'Персональные данные' },
    { route: '/settings/password', label: 'Смена пароля' },
    { route: '/settings/security', label: 'Верификация' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
