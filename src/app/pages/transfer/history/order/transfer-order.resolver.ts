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
import { MarketService } from '../../../../services/market/market.service';
import { TransferModule } from '../../transfer.module';
import { WorTransferHistoryOrder } from './transfer-order';

@Injectable({
  providedIn: TransferModule,
})
export class TransferOrderResolverService implements Resolve<WorTransferHistoryOrder> {
  constructor(
    private marketService: MarketService,
    private router: Router
  ) {
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorTransferHistoryOrder> | Observable<never> {
    const id = route.queryParams.id;
    
    return this.marketService.getTransferHistoryOrderById(+id).pipe(
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
