import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarketSellOfficeComponent } from './office.component';

describe('OfficeComponent', () => {
  let component: WorMarketSellOfficeComponent;
  let fixture: ComponentFixture<WorMarketSellOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarketSellOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarketSellOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
