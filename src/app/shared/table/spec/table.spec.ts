import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorTable } from '../table';

describe('Table', () => {
  let component: WorTable;
  let fixture: ComponentFixture<WorTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
