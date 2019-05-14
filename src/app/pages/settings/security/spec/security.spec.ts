import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorSecurity } from '../security';

describe('Security', () => {
  let component: WorSecurity;
  let fixture: ComponentFixture<WorSecurity>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorSecurity ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorSecurity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
