import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarketBuySpzComponent } from './spz.component';

describe('SpzComponent', () => {
  let component: WorMarketBuySpzComponent;
  let fixture: ComponentFixture<WorMarketBuySpzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarketBuySpzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarketBuySpzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
