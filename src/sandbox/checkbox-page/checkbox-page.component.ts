import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'wor-checkbox-page',
	templateUrl: './checkbox-page.component.html',
	styleUrls: ['./checkbox-page.component.scss'],
})
export class CheckboxPageComponent implements OnInit {
  checked: boolean;
  
	constructor() {}

	ngOnInit() {}
	
	onChange(event) {
	  this.checked = event;
  }
}
