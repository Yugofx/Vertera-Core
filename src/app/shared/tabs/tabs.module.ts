import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WorTab,
  WorTabs
} from './tabs';

const EXORT_DECLARATIONS = [
  WorTabs,
  WorTab,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...EXORT_DECLARATIONS,
  ],
  exports: [
    ...EXORT_DECLARATIONS,
  ]
})
export class TabsModule {}
