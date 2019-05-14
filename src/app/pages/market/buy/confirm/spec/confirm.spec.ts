import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarketBuyConfirm } from '../confirm';

describe('Confirm', () => {
  let component: WorMarketBuyConfirm;
  let fixture: ComponentFixture<WorMarketBuyConfirm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarketBuyConfirm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarketBuyConfirm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
