import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'wor-company',
  templateUrl: './company.html',
  styleUrls: ['./company.scss'],
})
export class WorSignupCompany implements OnInit {
  readonly steps = [
    { route: '/signup/company/account', label: 'Учетная запись' },
    { route: '/signup/company/details', label: 'Данные компании' },
    { route: '/signup/company/location', label: 'Юридический адрес' },
  ];
  
  constructor() {}
  
  ngOnInit() {}
  
}
