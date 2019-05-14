import {
  Directive,
  ElementRef,
  Input
} from '@angular/core';
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkFooterCell,
  CdkFooterCellDef,
  CdkHeaderCell,
  CdkHeaderCellDef,
} from '@angular/cdk/table';

@Directive({
  selector: '[worCellDef]',
  providers: [{ provide: CdkCellDef, useExisting: WorCellDef }]
})
export class WorCellDef extends CdkCellDef {
}

@Directive({
  selector: '[worHeaderCellDef]',
  providers: [{ provide: CdkHeaderCellDef, useExisting: WorHeaderCellDef }]
})
export class WorHeaderCellDef extends CdkHeaderCellDef {}

@Directive({
  selector: '[worFooterCellDef]',
  providers: [{ provide: CdkFooterCellDef, useExisting: WorFooterCellDef }]
})
export class WorFooterCellDef extends CdkFooterCellDef {
}

@Directive({
  selector: '[worColumnDef]',
  providers: [
    { provide: CdkColumnDef, useExisting: WorColumnDef },
  ],
})
export class WorColumnDef extends CdkColumnDef {
  @Input('worColumnDef') name: string;
  @Input() sticky: boolean;
  @Input() stickyEnd: boolean;
}

@Directive({
  selector: 'wor-header-cell, th[wor-header-cell]',
  host: {
    'class': 'wor-header-cell',
    'role': 'columnheader',
  },
})
export class WorHeaderCell extends CdkHeaderCell {
  constructor(
    columnDef: CdkColumnDef,
    elementRef: ElementRef<HTMLElement>
  ) {
    super(columnDef, elementRef);
  }
}

@Directive({
  selector: 'wor-footer-cell, td[wor-footer-cell]',
  host: {
    'class': 'wor-footer-cell',
    'role': 'gridcell',
  },
})
export class WorFooterCell extends CdkFooterCell {
  constructor(
    columnDef: CdkColumnDef,
    elementRef: ElementRef
  ) {
    super(columnDef, elementRef);
  }
}

@Directive({
  selector: 'wor-cell, td[wor-cell]',
  host: {
    'class': 'wor-cell',
    'role': 'gridcell',
  },
})
export class WorCell extends CdkCell {
  constructor(
    columnDef: CdkColumnDef,
    elementRef: ElementRef<HTMLElement>
  ) {
    super(columnDef, elementRef);
  }
}
