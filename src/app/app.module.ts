import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PartialsModule } from './partials/partials.module';
import {
  APP_CONFIG,
  BASIC_CONFIG
} from './app.config';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { WorCurrencyWidget } from './partials/currency/currency.widget';
import { WorCalcWidget } from './partials/calc/calc.widget';
import {
  Dictionary,
  DICTIONARY_TOKEN
} from './constants/dictionary';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { TokenInterceptor } from './common/token.interceptor';

registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: BASIC_CONFIG },
    { provide: DICTIONARY_TOKEN, useValue: Dictionary },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    WorCurrencyWidget,
    WorCalcWidget,
  ]
})
export class AppModule {
}
