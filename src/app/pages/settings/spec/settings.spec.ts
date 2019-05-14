import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorSettings } from '../settings';

describe('Profile', () => {
  let component: WorSettings;
  let fixture: ComponentFixture<WorSettings>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorSettings ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
