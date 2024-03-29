import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Component({
	selector: 'button[wor-button], button[wor-button-raised], button[wor-button-stroke]',
	templateUrl: './button.html',
	styleUrls: ['./button.scss'],
	host: {
		'[disabled]': 'disabled || null',
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorButton implements OnInit {
	@Input() disabled: boolean;
	@Input() color: string;

	constructor(protected elRef: ElementRef) {}

	ngOnInit() {
		if (this.color) {
			this.elRef.nativeElement.classList.add('-' + this.color);
		}
	}
}

@Component({
	selector: 'a[wor-button], a[wor-button-raised], a[wor-button-stroke]',
	templateUrl: './button.html',
	styleUrls: ['./button.scss'],
	inputs: ['disabled', 'color'],
	host: {
		'[attr.disabled]': 'disabled || null',
		'(click)': '_haltDisabledEvents($event)',
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorAnchor extends WorButton {
	constructor(protected elRef: ElementRef) {
		super(elRef);
	}

	_haltDisabledEvents(event: Event) {
		if (this.disabled) {
			event.preventDefault();
			event.stopImmediatePropagation();
		}
	}
}
