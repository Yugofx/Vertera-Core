import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  CDK_TABLE_TEMPLATE,
  CdkTable
} from '@angular/cdk/table';

@Component({
  selector: 'wor-table, table[wor-table]',
  exportAs: 'worTable',
  template: CDK_TABLE_TEMPLATE,
  styleUrls: ['./table.scss'],
  host: {
    'class': 'wor-table',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorTable<T> extends CdkTable<T> {}
