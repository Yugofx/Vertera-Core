import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthorized = new BehaviorSubject(!!this.token);

  constructor(public route: ActivatedRoute) {
    this.route.queryParams
        .pipe(take(2))
        .subscribe(queries => {
          if (queries.session_key) {
            this.startSession(queries.session_key);
          }
        });
  }

  private _token = null;
  
  get token() {
    return this._token || localStorage.getItem('token');
  }
  
  set token(token) {
    if (token) {
      this._token = token;
      localStorage.setItem('token', token);
    } else {
      this._token = null;
      localStorage.removeItem('token');
    }
  }
  
  startSession(token) {
    this.token = token;
    this.isAuthorized.next(true);
  }
  
  endSession() {
    this.token = null;
    this.isAuthorized.next(false);
  }
}
