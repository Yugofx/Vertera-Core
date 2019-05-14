import {
  Component,
  HostListener,
  Inject,
  OnInit
} from '@angular/core';
import { WorMarketBuyMoneyComponent } from './money/money.component';
import {
  IMoneyInput,
  WorMarketBuySpzComponent
} from './spz/spz.component';
import { DimensionService } from '../../../services/dimension/dimension.service';
import {
  IPaymentOptionsList,
  MarketService
} from '../../../services/market/market.service';
import { Router } from '@angular/router';
import { DICTIONARY_TOKEN } from '../../../constants/dictionary';

@Component({
  selector: 'wor-buy',
  templateUrl: './buy.html',
  styleUrls: ['./buy.scss'],
})
export class WorMarketBuy implements OnInit {
  moneyRef = WorMarketBuyMoneyComponent;
  spzRef = WorMarketBuySpzComponent;
  
  readonly displayedColumns = [
    'type',
    'total',
    'commission-perc',
    'commission',
    'payoff',
    'result',
    'action',
  ];
  
  options: IPaymentOptionsList[];
  userInput: IMoneyInput = { total: 0, code: 'RUB' };
  
  isSM = this.dimensionService.isSize('sm');
  
  @HostListener('window:resize')
  private updateSize() {
    this.isSM = this.dimensionService.isSize('sm');
  }

  constructor(
    private dimensionService: DimensionService,
    private marketService: MarketService,
    private router: Router,
    @Inject(DICTIONARY_TOKEN) public dict: any,
  ) {}

  ngOnInit() {
    this.marketService.getPaymentOptions()
      .subscribe((options: IPaymentOptionsList[]) => this.options = options);
  }
  
  buy(paymentID: number, optionID: number) {
    const paymentType: IPaymentOptionsList = this.options.find(opt => opt.id === paymentID);
    const option = paymentType.options.find(opt => opt.id === optionID);
    this.marketService.setDraft({
      ...option,
      ...this.userInput,
      label: paymentType.label,
    });
    this.router.navigateByUrl('/market/buy/confirm');
  }
  
  onTabChanges(tabIntance) {
    tabIntance.valueStream.subscribe(
      this.setUserInput.bind(this),
      error => null,
      this.resetUserInput.bind(this));
  }
  
  getCommission(rate): string {
    return (this.userInput.total * rate / 100).toFixed(2);
  }
  
  private resetUserInput() {
    this.userInput = { total: 0, code: 'RUB' };
  }

  private setUserInput(value: IMoneyInput) {
    this.userInput = value;
  }
}
