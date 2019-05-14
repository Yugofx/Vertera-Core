import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorTransferHistory } from '../transfer-history';

describe('HistoryComponent', () => {
  let component: WorTransferHistory;
  let fixture: ComponentFixture<WorTransferHistory>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorTransferHistory ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorTransferHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
