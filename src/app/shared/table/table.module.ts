import { NgModule } from '@angular/core';
import { WorTable } from './table';
import { CdkTableModule } from '@angular/cdk/table';
import {
  WorCell,
  WorCellDef,
  WorColumnDef,
  WorFooterCell,
  WorFooterCellDef,
  WorHeaderCell,
  WorHeaderCellDef
} from './cell';
import {
  WorFooterRow,
  WorFooterRowDef,
  WorHeaderRow,
  WorHeaderRowDef,
  WorRow,
  WorRowDef
} from './row';
import { CommonModule } from '@angular/common';

const EXPORTED_DECLARATIONS = [
  WorTable,
  
  WorHeaderCellDef,
  WorHeaderRowDef,
  WorColumnDef,
  WorCellDef,
  WorRowDef,
  WorFooterCellDef,
  WorFooterRowDef,
  
  WorHeaderCell,
  WorCell,
  WorFooterCell,
  
  WorHeaderRow,
  WorRow,
  WorFooterRow,
];

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
  ],
  exports: EXPORTED_DECLARATIONS,
  declarations: EXPORTED_DECLARATIONS,
})
export class TableModule {}
