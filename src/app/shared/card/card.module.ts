import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WorCard,
  WorCardDarkTheme,
  WorCardWidget,
} from './card';

const EXPORT_DECLARATIONS = [
  WorCard,
  WorCardDarkTheme,
  WorCardWidget,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: EXPORT_DECLARATIONS,
  exports: EXPORT_DECLARATIONS,
})
export class CardModule {}
