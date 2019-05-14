import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorButton } from './button';

describe('ButtonComponent', () => {
	let component: WorButton;
	let fixture: ComponentFixture<WorButton>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WorButton],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WorButton);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
