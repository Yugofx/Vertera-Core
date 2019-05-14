import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorLogin } from '../login';

describe('Login', () => {
  let component: WorLogin;
  let fixture: ComponentFixture<WorLogin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorLogin ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
