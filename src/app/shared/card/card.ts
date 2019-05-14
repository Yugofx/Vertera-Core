import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Directive({
  selector: 'wor-card[widget]',
  host: {
    'class': '-widget',
  },
})
export class WorCardWidget {
}

@Directive({
  selector: 'wor-card[dark]',
  host: {
    'class': '-dark',
  },
})
export class WorCardDarkTheme {
}

@Component({
  selector: 'wor-card, wor-card-mf',
  exportAs: 'worCard',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  host: {
    'class': 'wor-card',
    '[class.-divided]': 'divided',
    '[class.-error]': 'error',
    '[class.-mobile-free]': 'openBordersOnMobile',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorCard {
  @Input() divided = false;
  @Input() error = false;
  @Input() openBordersOnMobile: false;
}
