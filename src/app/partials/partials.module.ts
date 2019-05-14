import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorCalcWidget } from './calc/calc.widget';
import { WorCurrencyWidget } from './currency/currency.widget';
import { WorUserWidget } from './user/user.widget';

const EXPORT_DECLARATIONS = [
  WorCalcWidget,
  WorCurrencyWidget,
  WorUserWidget,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...EXPORT_DECLARATIONS,
  ],
  exports: [
    ...EXPORT_DECLARATIONS,
  ]
})
export class PartialsModule {}
