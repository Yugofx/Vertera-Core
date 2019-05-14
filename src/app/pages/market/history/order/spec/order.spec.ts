import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarketHistoryOrder } from '../order';

describe('OrderComponent', () => {
  let component: WorMarketHistoryOrder;
  let fixture: ComponentFixture<WorMarketHistoryOrder>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarketHistoryOrder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarketHistoryOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
