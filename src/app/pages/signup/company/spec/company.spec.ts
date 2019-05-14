import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorSignupCompany } from '../company';

describe('Company', () => {
  let component: WorSignupCompany;
  let fixture: ComponentFixture<WorSignupCompany>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorSignupCompany ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorSignupCompany);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
