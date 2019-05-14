import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Location } from '@angular/common';
import { DICTIONARY_TOKEN } from '../../../../constants/dictionary';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wor-market-order',
  templateUrl: './order.html',
  styleUrls: ['./order.scss'],
})
export class WorMarketHistoryOrder implements OnInit {
  order: any;

  constructor(private location: Location,
    private route: ActivatedRoute,
    @Inject(DICTIONARY_TOKEN) public dict: any) {}

  ngOnInit() {
    this.route.data.subscribe(data => this.order = data.order);
  }
  
  back() {
    this.location.back();
  }

}
