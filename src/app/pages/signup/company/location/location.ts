import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'wor-location',
  templateUrl: './location.html',
  styleUrls: ['../../signup.scss', './location.scss'],
})
export class WorSignupCompanyLocation implements OnInit {
  country = new FormControl('');
  zip = new FormControl('');
  city = new FormControl('');
  address = new FormControl('');
  location = this.fb.group({
    country: this.country,
    zip: this.zip,
    city: this.city,
    address: this.address,
  });
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {}
}
