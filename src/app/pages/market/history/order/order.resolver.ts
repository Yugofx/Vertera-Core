import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {
  Observable,
  of,
  EMPTY
} from 'rxjs';
import {
  mergeMap,
  take,
} from 'rxjs/operators';
import { WorMarketHistoryOrder } from './order';
import { MarketService } from '../../../../services/market/market.service';
import { MarketModule } from '../../market.module';

@Injectable({
  providedIn: MarketModule,
})
export class OrderResolverService implements Resolve<WorMarketHistoryOrder> {
  constructor(
    private marketService: MarketService,
    private router: Router
  ) {
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorMarketHistoryOrder> | Observable<never> {
    const id = route.queryParams.id;
    
    return this.marketService.getMarketHistoryOrderById(+id).pipe(
     take(1),
     mergeMap(order => {
       if (order) {
         return of(order);
       } else {
         this.router.navigate([
           'market',
           'history'
         ]);
         return EMPTY;
       }
     }),
    );
  }
}
