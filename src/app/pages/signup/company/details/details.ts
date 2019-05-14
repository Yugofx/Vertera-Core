import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'wor-details',
  templateUrl: './details.html',
  styleUrls: ['../../signup.scss', './details.scss'],
})
export class WorSignupCompanyDetails implements OnInit {
  name = new FormControl('');
  headName = new FormControl('');
  headSurname = new FormControl('');
  description = new FormControl('');
  details = this.fb.group({
    name: this.name,
    headName: this.headName,
    headSurname: this.headSurname,
    description: this.description,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

}
