import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorMeter } from '../meter';

describe('PasswordValidator', () => {
  let component: WorMeter;
  let fixture: ComponentFixture<WorMeter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorMeter]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorMeter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
