import { StorageKeys } from './storage.keys';

export default class Utils {
  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static getLanguage(): string {
    return localStorage.getItem(StorageKeys.USE_LANGUAGE) || navigator.language.split('-')[0];
  }
  
  static isRootActive(root: string, url: string): boolean {
    return !url.replace(root, '');
  }
}
