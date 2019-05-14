import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyWidget } from '../currency.widget';

describe('CurrencyWidget', () => {
  let component: CurrencyWidget;
  let fixture: ComponentFixture<CurrencyWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
