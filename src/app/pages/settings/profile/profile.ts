import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'wor-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class WorProfile implements OnInit {
  isCompanyAccount = true;
  
  name = new FormControl('', Validators.required);
  surname = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  companyName: FormControl = null;
  country = new FormControl('', Validators.required);
  city = new FormControl('');
  zip = new FormControl('');
  address = new FormControl('');
  tel = new FormControl('');
  profileForm = this.fb.group({
    name: this.name,
    surname: this.surname,
    email: this.email,
    country: this.country,
    city: this.city,
    zip: this.zip,
    address: this.address,
    tel: this.tel,
  });
  
  constructor(private fb: FormBuilder, private userService: UserService) {
    if (this.isCompanyAccount) {
      this.companyName = new FormControl('', Validators.required);
      this.profileForm.addControl('companyName', this.companyName);
    }
  }

  ngOnInit() {
    this.userService.me().subscribe(console.log);
  }
  
  submit() {
    return;
  }

}
