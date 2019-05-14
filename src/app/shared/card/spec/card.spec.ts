import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorCard } from '../card';

describe('CardComponent', () => {
  let component: WorCard;
  let fixture: ComponentFixture<WorCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
