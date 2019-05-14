import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorPassword } from '../password';

describe('AccountComponent', () => {
  let component: WorPassword;
  let fixture: ComponentFixture<WorPassword>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorPassword ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
