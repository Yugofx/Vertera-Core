import { InjectionToken } from '@angular/core';

export const Dictionary = {
  // statuses
  in_progress: 'В работе',
  done: 'Выполнена',
  canceled: 'Отменена',
  
  // operations
  buy: 'Покупка',
  sell: 'Продажа',
  sent: 'Отправлено',
  received: 'Получено',
  
  // payment types
  transfer: 'Перевод на счет',
  card: 'Перевод на карту',
  e_money: 'Электронные деньги',
  
  // terms
  immediate: 'Мгновенно',
  day: '24 часа',
  
  // currencies codes
  USD: 'Доллары США',
  RUB: 'Рубли',
  EUR: 'Евро',
  GBP: 'Британский фунт',
  CHF: 'Швейцарский франк',
  CNY: 'Юань',
  JPY: 'Йена',
  
  // payment options
  vs: 'Visa',
  ms: 'Master Card',
  sb: 'Сбербанк',
  tf: 'Тинькофф',
  qiwi: 'QiWi',
  yd: 'Яндекс Деньги',
};

export const DICTIONARY_TOKEN = new InjectionToken<{ [key: string]: any }>('app.dictionary');
