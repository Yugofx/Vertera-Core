import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorNotFound } from '../not-found';

describe('NotFoundComponent', () => {
  let component: WorNotFound;
  let fixture: ComponentFixture<WorNotFound>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorNotFound ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorNotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
