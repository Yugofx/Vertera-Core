import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DimensionService {
  constructor() {}
  
  isSize(size: string): boolean {
    switch (size) {
      case 'lg':
        return window.innerWidth < 1200;
      case 'md':
        return window.innerWidth < 992;
      case 'sm':
        return window.innerWidth < 768;
      case 'xs':
        return window.innerWidth <= 575;
    }
  }
}
