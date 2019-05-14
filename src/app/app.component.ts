import {
  Component,
  HostListener,
  Inject,
} from '@angular/core';
import * as R from 'ramda';
import { articles } from './constants/articles';
import {
  ILanguage,
  languages
} from './constants/languages';
import Utils from './common/utils';
import { StorageKeys } from './common/storage.keys';
import {
  APP_CONFIG,
  IAppConfig
} from './app.config';
import { WorCurrencyWidget } from './partials/currency/currency.widget';
import { WorCalcWidget } from './partials/calc/calc.widget';
import { DimensionService } from './services/dimension/dimension.service';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isXS = this.dimensionService.isSize('xs');
  isNotFoundPage = false;
  isAuthorized: boolean;
  @HostListener('window:resize')
  private updateSize() {
    this.isXS = this.dimensionService.isSize('xs');
  }
  
  readonly widgets = {
    currency: WorCurrencyWidget,
    calculator: WorCalcWidget,
  };
  
  readonly articles = R.clone(articles);
  readonly languages: ILanguage[] = R.clone(languages);
  readonly profileMenuRoutes = [
    { route: '/login', icon: 'login', label: 'Войти', authorized: false },
    { route: '/signup', icon: 'plus', label: 'Зарегистрироваться', authorized: false },
    { route: '/settings', icon: 'user', label: 'Мой профиль', authorized: true },
  ];
  activeLanguage: ILanguage = this.languages.find(lang => lang.code === Utils.getLanguage()) || this.languages[0];
  
  constructor(
    private dimensionService: DimensionService,
    private authService: AuthService,
    private router: Router,
    @Inject(APP_CONFIG) public config: IAppConfig,
  ) {
    this.authService.isAuthorized.subscribe(isAuthorized => this.isAuthorized = isAuthorized);
  }
  
  setActiveLanguage(code: string) {
    const currentLang = localStorage.getItem(StorageKeys.USE_LANGUAGE);
    if (currentLang !== code) {
      localStorage.setItem(StorageKeys.USE_LANGUAGE, code);
      window.location.reload();
    }
  }
  
  onActivate(event) {
    this.isNotFoundPage = event.constructor.name === 'WorNotFound';
  }
  
  logout() {
    this.authService.endSession();
    this.router.navigateByUrl('/login');
  }
}
