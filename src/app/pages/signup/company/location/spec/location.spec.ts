import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Address } from '../location';

describe('Address', () => {
  let component: Address;
  let fixture: ComponentFixture<Address>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Address ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Address);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
