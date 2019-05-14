import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarketSell } from '../sell';

describe('Sell', () => {
  let component: WorMarketSell;
  let fixture: ComponentFixture<WorMarketSell>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarketSell ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarketSell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
