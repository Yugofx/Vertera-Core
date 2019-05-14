import { Injectable } from '@angular/core';
import { MarketModule } from '../../pages/market/market.module';
import {
  Observable,
  of
} from 'rxjs';

// TODO: remove
const MARKET_HISTORY_MOCK = [
  {
    id: 104251,
    created_at: new Date('2018-10-25').toString(),
    operation: 'sell',
    option: 'card',
    option_details: 'vs',
    commission: 2.95,
    payoff: 'immediate',
    total: 10123.53,
    code: 'GBP',
    spz: 12101,
    status: 'in_progress',
  },
  {
    id: 104551,
    created_at: new Date('2018-10-12').toString(),
    operation: 'buy',
    option: 'transfer',
    option_details: 'tf',
    commission: 1.63,
    payoff: 'immediate',
    total: 8512.61,
    code: 'RUB',
    spz: 131,
    status: 'canceled',
  },
  {
    id: 103271,
    created_at: new Date('2018-08-20').toString(),
    operation: 'sell',
    option: 'transfer',
    option_details: 'tf',
    commission: 1.63,
    payoff: 'immediate',
    total: 103,
    code: 'USD',
    spz: 96,
    status: 'done',
  },
  {
    id: 102847,
    created_at: new Date('2018-02-06').toString(),
    operation: 'buy',
    option: 'e_money',
    option_details: 'qiwi',
    commission: 5.33,
    payoff: 'day',
    total: 6520,
    code: 'RUB',
    spz: 62,
    status: 'in_progress',
  },
];
const TRANSFER_HISTORY_MOCK = [
  {
    id: 921512,
    created_at: new Date('2018-06-12').toString(),
    operation: 'sent',
    sender: { wallet_number: 11111111, user: 'Сидоров А.А.' },
    receiver: { wallet_number: 66666666, user: 'Тагаев А.Ш.' },
    spz: 1012,
    commission: 0.008,
    status: 'in_progress',
  },
  {
    id: 573151,
    created_at: new Date('2018-05-25').toString(),
    operation: 'received',
    sender: { wallet_number: 33333333, user: 'Петров П.П.' },
    receiver: { wallet_number: 11111111, user: 'Сидоров А.А.' },
    spz: 141,
    commission: 0.008,
    status: 'done',
  },
  {
    id: 431583,
    created_at: new Date('2018-10-06').toString(),
    operation: 'sent',
    sender: { wallet_number: 11111111, user: 'Сидоров А.А.' },
    receiver: { wallet_number: 33333333, user: 'Петров П.П.' },
    spz: 462,
    commission: 0.008,
    status: 'canceled',
  },
];

export interface IPaymentOption {
  id: number;
  type: string;
  percent: number;
  payoff: string;
}

export interface IPaymentOptionsList {
  id: number;
  label: string;
  options: IPaymentOption[];
}

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  private draft = null;
  
  constructor() {
  }
  
  getPaymentOptions(): Observable<IPaymentOptionsList[]> {
    return of([
      {
        id: 1,
        label: 'Банковская карта',
        options: [
          {
            type: 'visa',
            percent: 2.95,
            id: 1,
            payoff: 'immediate',
          },
          {
            type: 'ms',
            percent: 3.17,
            id: 2,
            payoff: 'immediate',
          },
        ],
      },
      {
        id: 2,
        label: 'Банковский перевод',
        options: [
          {
            type: 'sb',
            percent: 5.3,
            id: 1,
            payoff: 'immediate',
          },
          {
            type: 'tf',
            percent: 4.17,
            id: 2,
            payoff: 'immediate',
          },
        ],
      },
      {
        id: 3,
        label: 'Электронные деньги',
        options: [
          {
            type: 'qiwi',
            percent: 1.58,
            id: 1,
            payoff: 'immediate',
          },
          {
            type: 'yd',
            percent: 1.72,
            id: 2,
            payoff: 'immediate',
          },
        ],
      },
    ]);
  }
  
  setDraft(request) {
    // TODO: add to local storage
    this.draft = request;
  }
  
  getDraft() {
    return this.draft;
  }
  
  clearDraft() {
    this.draft = null;
  }
  
  getMarketHistory(): Observable<any> {
    return of (MARKET_HISTORY_MOCK);
  }
  
  getMarketHistoryOrderById(id: number): Observable<any> {
    return of(MARKET_HISTORY_MOCK.find(d => d.id === id));
  }
  
  getTransferHistory(): Observable<any> {
    return of (TRANSFER_HISTORY_MOCK);
  }
  
  getTransferHistoryOrderById(id: number): Observable<any> {
    return of(TRANSFER_HISTORY_MOCK.find(d => d.id === id));
  }
}
