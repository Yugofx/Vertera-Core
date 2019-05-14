import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarketBuyMoneyComponent } from './money.component';

describe('MoneyComponent', () => {
  let component: WorMarketBuyMoneyComponent;
  let fixture: ComponentFixture<WorMarketBuyMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarketBuyMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarketBuyMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
