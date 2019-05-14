import {
  Component,
  HostListener,
  Inject,
  OnInit
} from '@angular/core';
import { DimensionService } from '../../../services/dimension/dimension.service';
import { DICTIONARY_TOKEN } from '../../../constants/dictionary';
import { MarketService } from '../../../services/market/market.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wor-transfer-history',
  templateUrl: './transfer-history.html',
  styleUrls: ['./transfer-history.scss', '../../market/history/history.scss'],
})
export class WorTransferHistory implements OnInit {
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
    'sender',
    'receiver',
    'spz',
    'status',
  ];
  dataSource = this.marketService.getTransferHistory();

  constructor(
    private dimensionService: DimensionService,
    @Inject(DICTIONARY_TOKEN) public dict: any,
    private marketService: MarketService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.displayActionButton();
  }
  
  openOrder(orderID: number) {
    this.router.navigate(
      ['transfer', 'history', 'order'],
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
