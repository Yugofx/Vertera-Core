import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  takeUntil,
  tap
} from 'rxjs/operators';
import {
  IServiceUser,
  UserService
} from '../../../services/user/user.service';

@Component({
  selector: 'wor-transfer-action',
  templateUrl: './action.html',
  styleUrls: ['./action.scss'],
})
export class WorTransferAction implements OnInit, OnDestroy {
  isValidating = false;
  isConfirmed = false;
  
  readonly advantages = [
    { name: 'Время перевода:', value: 'Моментально' },
    { name: 'Комиссия:', value: '0.008%' },
  ];
  
  commission: number;
  sum: number;
  recipient: string;
  
  walletNumber = new FormControl();
  total = new FormControl();
  destroy = new Subject();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.total.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(this.updateSummary.bind(this));
    this.walletNumber.valueChanges
      .pipe(
        takeUntil(this.destroy),
        debounceTime(400),
        distinctUntilChanged(),
        map(value => value.replace(/\D/g, '')),
        switchMap(v => this.userService.getUser(v)),
        tap(this.getRecipient.bind(this)),
      )
      .subscribe();
  }
  
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
  
  validate() {
    this.isValidating = true;
  }
  
  back() {
    this.walletNumber.reset();
    this.total.reset();
    this.isValidating = this.isConfirmed = false;
  }
  
  send() {
    this.isConfirmed = true;
  }
  
  private updateSummary(value: string) {
    this.commission = (+value * 0.008 / 100);
    this.sum = this.commission + +value;
  }
  
  private getRecipient(serviceUser: IServiceUser) {
    this.recipient = serviceUser ? serviceUser.user : '';
  }
}
