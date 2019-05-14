import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarketBuy } from '../buy';

describe('Buy', () => {
  let component: WorMarketBuy;
  let fixture: ComponentFixture<WorMarketBuy>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarketBuy ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarketBuy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
