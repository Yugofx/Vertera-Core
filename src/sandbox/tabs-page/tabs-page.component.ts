import { Component, OnInit } from '@angular/core';
import { WorSelect } from '../../app/shared/select/select';
import { WorCard } from '../../app/shared/card/card';

@Component({
	selector: 'wor-tabs-page',
	templateUrl: './tabs-page.component.html',
	styleUrls: ['./tabs-page.component.scss'],
})
export class TabsPageComponent implements OnInit {
  cardRef = WorCard;
  selectRef = WorSelect;
  
	constructor() {}

	ngOnInit() {}
}
