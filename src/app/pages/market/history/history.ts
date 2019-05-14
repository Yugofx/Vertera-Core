import {
  Component,
  HostListener,
  Inject,
  OnInit
} from '@angular/core';
import { MarketService } from '../../../services/market/market.service';
import { DICTIONARY_TOKEN } from '../../../constants/dictionary';
import { Router } from '@angular/router';
import { DimensionService } from '../../../services/dimension/dimension.service';

@Component({
  selector: 'wor-history',
  templateUrl: './history.html',
  styleUrls: ['./history.scss'],
})
export class WorMarketHistory implements OnInit {
  isSM = this.dimensionService.isSize('sm');
  @HostListener('window:resize')
  private updateSize() {
    this.isSM = this.dimensionService.isSize('sm');
    this.displayActionButton();
  }
  displayedColumns = [
    'id',
    'created_at',
    'operation',
    'total',
    'spz',
    'status',
  ];
  dataSource = this.marketService.getMarketHistory();

  constructor(private marketService: MarketService,
    private dimensionService: DimensionService,
    @Inject(DICTIONARY_TOKEN) public dict: any,
    private router: Router) {}
    
  ngOnInit() {
    this.displayActionButton();
  }
  
  openOrder(orderID: number) {
    this.router.navigate(
      ['market', 'history', 'order'],
      { queryParams: { id: orderID }},
    );
  }
  
  private displayActionButton() {
    const actionIndex = this.displayedColumns.indexOf('action');
    if (this.isSM) {
      if (actionIndex === -1) {
        this.displayedColumns.push('action');
      }
    } else {
      if (actionIndex > -1) {
        this.displayedColumns.splice(actionIndex, 1);
      }
    }
  }
}
