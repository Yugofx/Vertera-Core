import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
	selector: 'wor-input-page',
	templateUrl: './input-page.component.html',
	styleUrls: ['./input-page.component.scss'],
})
export class InputPageComponent implements OnInit {
  public isPasswordVisible = false;
  
	constructor() {
	 
  }

	ngOnInit() {
	 
  }
  
  togglePasswordVisibility() {
	  this.isPasswordVisible = !this.isPasswordVisible;
  }
}
