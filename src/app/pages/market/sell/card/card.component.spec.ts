import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarketSellCardComponent } from './card.component';

describe('CardComponent', () => {
  let component: WorMarketSellCardComponent;
  let fixture: ComponentFixture<WorMarketSellCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarketSellCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarketSellCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
