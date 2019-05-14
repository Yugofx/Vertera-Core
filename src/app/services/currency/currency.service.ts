import { Injectable } from '@angular/core';

export interface ICurrency {
  rate: number;
  code: string;
  label?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currencies: ICurrency[] = [
    { rate: 1.4, code: 'USD', label: 'Доллары США' },
    { rate: 92.47, code: 'RUB', label: 'Рубли' },
    { rate: 1.2, code: 'EUR', label: 'Евро' },
    { rate: 1.07, code: 'GBP', label: 'Британский фунт' },
    { rate: 1.36, code: 'CHF', label: 'Швейцарский франк' },
    { rate: 9.66, code: 'CNY', label: 'Юань' },
    { rate: 158.59, code: 'JPY', label: 'Йена' },
  ];

  constructor() {}
}
