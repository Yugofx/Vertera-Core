import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation
} from '@angular/core';
import {
  CDK_ROW_TEMPLATE,
  CdkFooterRow,
  CdkFooterRowDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkRow,
  CdkRowDef,
} from '@angular/cdk/table';

@Directive({
  selector: '[worHeaderRowDef]',
  providers: [{ provide: CdkHeaderRowDef, useExisting: WorHeaderRowDef }],
  inputs: [
    'columns: worHeaderRowDef',
    'sticky: worHeaderRowDefSticky'
  ],
})
export class WorHeaderRowDef extends CdkHeaderRowDef {
}

@Directive({
  selector: '[worFooterRowDef]',
  providers: [{ provide: CdkFooterRowDef, useExisting: WorFooterRowDef }],
  inputs: [
    'columns: worFooterRowDef',
    'sticky: worFooterRowDefSticky'
  ],
})
export class WorFooterRowDef extends CdkFooterRowDef {
}

@Directive({
  selector: '[worRowDef]',
  providers: [{ provide: CdkRowDef, useExisting: WorRowDef }],
  inputs: [
    'columns: worRowDefColumns',
    'when: worRowDefWhen'
  ],
})
export class WorRowDef<T> extends CdkRowDef<T> {
}

@Component({
  selector: 'wor-header-row, tr[wor-header-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'wor-header-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'worHeaderRow',
  providers: [{ provide: CdkHeaderRow, useExisting: WorHeaderRow }],
})
export class WorHeaderRow extends CdkHeaderRow {
}

@Component({
  selector: 'wor-footer-row, tr[wor-footer-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'wor-footer-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'worFooterRow',
  providers: [{ provide: CdkFooterRow, useExisting: WorFooterRow }],
})
export class WorFooterRow extends CdkFooterRow {
}

@Component({
  selector: 'wor-row, tr[wor-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'wor-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'worRow',
  providers: [{ provide: CdkRow, useExisting: WorRow }],
})
export class WorRow extends CdkRow {
}
