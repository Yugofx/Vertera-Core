import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';
import { DimensionService } from '../../../services/dimension/dimension.service';
import { WorMarketSellCardComponent } from './card/card.component';
import { WorMarketSellOfficeComponent } from './office/office.component';
import { WorMarketSellTransferComponent } from './transfer/transfer.component';

@Component({
  selector: 'wor-sell',
  templateUrl: './sell.html',
  styleUrls: ['./sell.scss']
})
export class WorMarketSell implements OnInit {
  cardComponent = WorMarketSellCardComponent;
  officeComponent = WorMarketSellOfficeComponent;
  transferComponent = WorMarketSellTransferComponent;
  
  isSM = this.dimensionService.isSize('sm');
  @HostListener('window:resize')
  private updateSize() {
    this.isSM = this.dimensionService.isSize('sm');
  }
  
  
  
  constructor(private dimensionService: DimensionService,
    ) { }

  ngOnInit() {
  }

}
