import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarketSellTransferComponent } from './transfer.component';

describe('TransferComponent', () => {
  let component: WorMarketSellTransferComponent;
  let fixture: ComponentFixture<WorMarketSellTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarketSellTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarketSellTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
