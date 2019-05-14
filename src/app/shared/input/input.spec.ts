import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorInput } from './input';

describe('InputComponent', () => {
  let component: WorInput;
  let fixture: ComponentFixture<WorInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
