import {
  Component,
  OnInit,
} from '@angular/core';
import { CurrencyService } from '../../services/currency/currency.service';

@Component({
  selector: 'wor-calc-widget',
  templateUrl: './calc.widget.html',
  styleUrls: ['./calc.widget.scss'],
})
export class WorCalcWidget implements OnInit {
  value = 0;
  currencies = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencies = this.currencyService.currencies;
  }
  
  onInput(event) {
    this.value = +event.target.value;
  }
  
  getSum(currency) {
    return currency * this.value;
  }

}
