import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
  defer,
  merge,
  Observable,
  Subject
} from 'rxjs';
import {
  startWith,
  takeUntil
} from 'rxjs/operators';
import { ClickOutsideDirective } from 'ng-click-outside';

export const INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WorSelect),
  multi: true,
};

@Component({
  selector: 'wor-option',
  template: `{{ viewOption }}`,
  host: {
    'class': 'form-select-option',
    '[class.selected]': 'selected',
    '(click)': 'onClick(value)',
  },
  styleUrls: ['./select.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorOption implements OnInit, OnDestroy {
  @Input() value: string;
  @Input() viewOption: string;
  @Input() selected: boolean;
  public onSelectChange = new Subject<any>();
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.onSelectChange.complete();
  }
  
  onClick(value: string) {
    this.onSelectChange.next(value);
  }
}

@Component({
  selector: 'wor-select',
  templateUrl: './select.html',
  styleUrls: ['./select.scss'],
  providers: [INPUT_CONTROL_VALUE_ACCESSOR],
})
export class WorSelect implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  @ContentChildren(WorOption, { descendants: true }) options: QueryList<WorOption>;
  @ViewChild(ClickOutsideDirective, { read: ElementRef }) panelRef: ElementRef;
  @Input() disabled: boolean;
  @Output() valueChange = new EventEmitter<string>();
  @Output() openChange = new EventEmitter();
  @Output() closeChange = new EventEmitter();
  readonly optionSelectionChanges: Observable<any> = defer(() => {
    return merge(...this.options.map(option => option.onSelectChange));
  });
  public isPanelOpened: boolean;
  private readonly destroy = new Subject();
  private onChange = _ => null;
  private onTouch = () => null;
  
  panelHeight: number;
  private readonly defaultDispayedOption = 'Выберите...';
  displayedOption = this.defaultDispayedOption;
  
  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }
  
  private _value: any;
  
  @Input()
  get value() {
    return this._value;
  }
  set value(newValue: string) {
    if (newValue !== this._value) {
      this.checkOptionValidity(newValue);
      this.writeValue(newValue);
      this._value = newValue;
    }
  }
  
  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.panelHeight = Array.from(this.panelRef.nativeElement.children)
         .reduce((acc, child: any) => acc + child.offsetHeight, 0);
  }
  
  ngAfterContentInit() {
    this.initializeValue();
    this.optionSelectionChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(value => {
        this.value = value;
        this.markSelectedOption(value);
        this.close();
      });
  }
  
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    if (isDisabled && this.isPanelOpened) {
      this.close();
    }
    this.disabled = isDisabled;
  }
  
  writeValue(newValue: any): void {
    if (this.options) {
      this.valueChange.emit(newValue);
      this.onChange(newValue);
      const selected = this.options.find(opt => opt.value === newValue);
      this.displayedOption = selected ? selected.viewOption : this.defaultDispayedOption;
    }
  }
  
  toggle() {
    this.isPanelOpened ? this.close() : this.open();
  }
  
  open() {
    if (this.disabled || !this.options.length || this.isPanelOpened) {
      return;
    }
    this.openChange.emit();
    this.isPanelOpened = true;
  }
  
  close() {
    if (this.isPanelOpened) {
      this.closeChange.emit();
      this.isPanelOpened = false;
      this.onTouch();
    }
  }
  
  onClickOutside(event) {
    if (!this.isPanelOpened) {
      return;
    }
    const selectBox = event.target.closest('.form-select-box');
    if (selectBox && selectBox.parentNode === this.panelRef.nativeElement.parentNode) {
      return;
    }
    this.close();
  }
  
  private initializeValue() {
    if (this.options) {
      if (this.value) {
        this.checkOptionValidity(this.value);
        this.writeValue(this.value);
        return;
      }
      const selected = this.options.filter(opt => opt.selected);
      if (selected.length) {
        if (selected.length > 1) {
          console.warn('Select component does not support multiselect. Fallback to first selected option');
          selected.forEach((opt, idx) => {
            opt.selected = !idx;
          });
        }
        this.value = selected[0].value;
      }
    }
  }
  
  private markSelectedOption(value: string) {
    const previousOption = this.options.find(opt => opt.selected);
    const newOption = this.options.find(opt => opt.value === value);
    if (previousOption) {
      previousOption.selected = false;
    }
    if (newOption) {
      newOption.selected = true;
    }
  }
  
  private checkOptionValidity(option: string) {
    if (this.options && !this.options.find(opt => opt.value === option)) {
      console.error(`A value of "${option}" not found in options list`);
      this.displayedOption = this.defaultDispayedOption;
    }
  }
}
