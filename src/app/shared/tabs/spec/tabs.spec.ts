import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorTabs } from '../tabs';

describe('Tabs', () => {
  let component: WorTabs;
  let fixture: ComponentFixture<WorTabs>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorTabs ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
