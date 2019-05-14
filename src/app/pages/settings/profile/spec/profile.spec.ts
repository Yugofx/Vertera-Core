import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorProfile } from '../profile';

describe('Profile', () => {
  let component: WorProfile;
  let fixture: ComponentFixture<WorProfile>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorProfile ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
