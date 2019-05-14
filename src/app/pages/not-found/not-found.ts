import {
  Component,
  HostListener
} from '@angular/core';
import { DimensionService } from '../../services/dimension/dimension.service';

@Component({
  selector: 'wor-not-found',
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.scss'],
})
export class WorNotFound {
  isXS = this.dimensionService.isSize('xs');
  @HostListener('window:resize')
  private updateSize() {
    this.isXS = this.dimensionService.isSize('xs');
  }
  
  constructor(private dimensionService: DimensionService) {}
}
