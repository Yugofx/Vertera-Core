import { Injectable } from '@angular/core';
import {
  Observable,
  of
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IServiceUser {
  wallet_number: number;
  user: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  mock: IServiceUser[] = [
    { wallet_number: 11111111, user: 'Сидоров А.А.' },
    { wallet_number: 22222222, user: 'Петров Б.Б.' },
    { wallet_number: 33333333, user: 'Иванов И.И.' },
    { wallet_number: 44444444, user: 'Рыжов Р.Р.' },
    { wallet_number: 55555555, user: 'Киркоров Ф.Б.' },
    { wallet_number: 66666666, user: 'Галкин М.Л.' },
    { wallet_number: 77777777, user: 'Семенов А.Б' },
    { wallet_number: 88888888, user: 'Дамблдор А.Р' },
    { wallet_number: 99999999, user: 'Снейп С.Р' },
  ];

  constructor(private http: HttpClient) {}
  
  getUser(walletNumber: string): Observable<IServiceUser> {
    return of(this.mock.find(u => String(u.wallet_number) === walletNumber));
  }
  
  me(): Observable<any> {
    return this.http.get('https://api.wr.market/v1/user/profile?expand=balances,balances.currency&fields=id,fname,mname,lname,image,email,ref,vlv_id,is_franchisee,is_guest,roles,quantity_data,balances.id,balances.sum,balances.currency_code,balances.currency.id,balances.currency.name,balances.currency.code,balances.currency.abbreviation,balances.currency.nominal,balances.currency.rate');
  }
}
