import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorTransferAction } from '../action';

describe('ActionComponent', () => {
  let component: WorTransferAction;
  let fixture: ComponentFixture<WorTransferAction>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorTransferAction ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorTransferAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
