import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  title?: string;
  phoneNumber?: number;
  paymentMethods: string[];
  socials: string[];
  copyright: string;
}

export const BASIC_CONFIG: IAppConfig = {
  title: 'Мир Торговли - СПЗ',
  phoneNumber: 88005005555,
  paymentMethods: ['visa', 'mastercard', 'sberbank', 'tinkoff', 'yandexmoney', 'qiwi'],
  socials: ['vk', 'fb', 'insta'],
  copyright: '© 2018 ООО НКО «Банк Богатый» \nЛицензия банка России № 532898-К',
};

export const APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
