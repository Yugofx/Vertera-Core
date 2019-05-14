import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMarket } from '../market';

describe('Market', () => {
  let component: WorMarket;
  let fixture: ComponentFixture<WorMarket>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMarket ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMarket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
