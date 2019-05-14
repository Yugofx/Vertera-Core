import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WorAnchor,
  WorButton
} from './button/button';
import { WorInput } from './input/input';
import {
  WorOption,
  WorSelect
} from './select/select';
import { ClickOutsideModule } from 'ng-click-outside';
import { WorCheckbox } from './checkbox/checkbox';
import { CardModule } from './card/card.module';
import { TableModule } from './table/table.module';
import { WorDropdown } from './dropdown/dropdown';
import { TabsModule } from './tabs/tabs.module';
import { PhonePipe } from './phone.pipe';
import { WorMeter } from './meter/meter';

const EXPORT_DECLARATIONS = [
  WorButton,
  WorAnchor,
  WorInput,
  WorCheckbox,
  WorDropdown,
  WorSelect,
  WorOption,
  WorMeter,
  
  PhonePipe,
];

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    TabsModule,
    ClickOutsideModule,
  ],
  declarations: [
    ...EXPORT_DECLARATIONS,
  ],
  exports: [
    ...EXPORT_DECLARATIONS,
    TableModule,
    CardModule,
    TabsModule,
  ],
})
export class SharedModule {}
