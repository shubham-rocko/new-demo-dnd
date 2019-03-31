import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    signupForm: any;
    passwordFormGroup: any;

  constructor() { }

  ngOnInit() {
  }

    toggleInputType($event, mainP: string) {

    }

    onSignup() {

    }
}
