import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Location } from '@angular/common';
import { DICTIONARY_TOKEN } from '../../../../constants/dictionary';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wor-transfer-order',
  templateUrl: './transfer-order.html',
  styleUrls: ['./transfer-order.scss'],
})
export class WorTransferHistoryOrder implements OnInit {
  order: any;

  constructor(private location: Location,
    private route: ActivatedRoute,
    @Inject(DICTIONARY_TOKEN) public dict: any) {}

  ngOnInit() {
    this.route.data.subscribe(this.setOrder.bind(this));
  }
  
  back() {
    this.location.back();
  }

  private setOrder(data) {
    this.order = data.order;
  }
}
