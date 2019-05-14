import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as R from 'ramda';
import Utils from '../app/common/utils';

@Component({
	selector: 'wor-sandbox-root',
	templateUrl: './sandbox.component.html',
	styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent {
	public routes = [];

	constructor(private router: Router) {
		this.routes = this.router.config
			.filter(route => !R.isEmpty(route.path))
			.map(route => ({ name: Utils.capitalize(route.path), path: route.path }));
	}
}
