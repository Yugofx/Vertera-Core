import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'wor-password',
  templateUrl: './password.html',
  styleUrls: ['./password.scss'],
})
export class WorPassword implements OnInit {
  isPasswordVisible = false;
  isOldPasswordValidated = false;
  isNewPasswordUpdated = false;
  
  oldPassword = new FormControl('', Validators.required);
  newPassword = new FormControl('', [
    Validators.required,
    Validators.pattern(/(?=.*[A-Z])(?=.*[\d])(.{7,})/),
  ]);
  
  constructor() {}

  ngOnInit() {
  }
  
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  validatePassword(oldPassword: string) {
    // TODO: add service method
    this.isOldPasswordValidated = true;
  }
  
  updatePassword(newPassword: string) {
    // TODO: add service method
    this.isNewPasswordUpdated = true;
  }
  
  back() {
    this.newPassword.reset();
    this.oldPassword.reset();
    this.isNewPasswordUpdated = this.isOldPasswordValidated = false;
  }

}
