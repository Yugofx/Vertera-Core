import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'wor-personal',
  templateUrl: './personal.html',
  styleUrls: [
    '../signup.scss',
    './personal.scss'
  ],
})
export class WorSignupPersonal implements OnInit, OnDestroy {
  destroy = new Subject();
  showPassword = false;
  name = new FormControl('', Validators.required);
  surname = new FormControl('');
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
      Validators.pattern(/(?=.*[A-Z])(?=.*[\d])(.{7,})/),
    ],
  );
  registrationForm = this.fb.group({
    name: this.name,
    surname: this.surname,
    email: this.email,
    tel: this.tel,
    password: this.password,
  });
  
  constructor(private fb: FormBuilder) {
  }
  
  ngOnInit() {}
  
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  submit() {
    return;
  }
}
