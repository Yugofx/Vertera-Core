import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'wor-account',
  templateUrl: './account.html',
  styleUrls: ['../../signup.scss', './account.scss'],
})
export class WorSignupCompanyAccount implements OnInit, OnDestroy {
  destroy = new Subject();
  showPassword = false;
  
  email = new FormControl(
    '',
    [
      Validators.email,
      Validators.required,
    ]
  );
  tel = new FormControl('', [Validators.required]);
  password = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern(/(?=.*[A-Z].*\d)/),
    ],
  );
  account = this.fb.group({
    email: this.email,
    tel: this.tel,
    password: this.password,
  });
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {}
  
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  submit() {}
}
