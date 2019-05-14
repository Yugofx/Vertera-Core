import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'wor-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class WorLogin implements OnInit {
  isAuthorized = false;
  isPasswordVisible = false;
  error: string;
  
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  loginForm = this.fb.group({
    email: this.email,
    password: this.password,
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthorized.subscribe(val => this.isAuthorized = val);
  }
  
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  submit() {
  
  }

}
