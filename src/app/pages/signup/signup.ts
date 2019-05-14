import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterEvent
} from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Utils from '../../common/utils';

@Component({
  selector: 'wor-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss'],
})
export class WorSignup implements OnInit, OnDestroy {
  showMenu = Utils.isRootActive('/signup', this.router.url);
  destroy = new Subject();
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.destroy))
      .subscribe((e: RouterEvent) => {
        if (e instanceof NavigationEnd) {
          this.showMenu = Utils.isRootActive('/signup', e.url);
        }
      });
  }
  
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
