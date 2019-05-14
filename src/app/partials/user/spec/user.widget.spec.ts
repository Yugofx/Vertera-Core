import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorUserWidget } from '../user.widget';

describe('UserWidget', () => {
  let component: WorUserWidget;
  let fixture: ComponentFixture<WorUserWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorUserWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorUserWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
