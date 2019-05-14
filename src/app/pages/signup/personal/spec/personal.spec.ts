import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorSignupPersonal } from '../personal';

describe('Personal', () => {
  let component: WorSignupPersonal;
  let fixture: ComponentFixture<WorSignupPersonal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorSignupPersonal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorSignupPersonal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
