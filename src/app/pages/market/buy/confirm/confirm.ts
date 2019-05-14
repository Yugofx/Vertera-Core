import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Location } from '@angular/common';
import { MarketService } from '../../../../services/market/market.service';
import { DICTIONARY_TOKEN } from '../../../../constants/dictionary';

@Component({
  selector: 'wor-confirm',
  templateUrl: './confirm.html',
  styleUrls: ['./confirm.scss'],
})
export class WorMarketBuyConfirm implements OnInit {
  draft = null;

  constructor(
    private location: Location,
    private marketService: MarketService,
    @Inject(DICTIONARY_TOKEN) public dict: any,
  ) {}

  ngOnInit() {
    this.draft = this.marketService.getDraft();
  }
  
  back() {
    this.location.back();
  }
  
  finish() {
  
  }
  
  getCommission(): string {
    return (this.draft.total * this.draft.percent / 100).toFixed(2);
  }

}
