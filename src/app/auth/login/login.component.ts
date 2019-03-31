import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetToken } from '../../core';
import { Router } from '@angular/router';
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public emailRegex: string =
    '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))';
  public pwdRegex: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}$";

  constructor(private getToken: GetToken,
    private router: Router,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.createForm();
    this.setTokenToNull();
  }

  setTokenToNull(){
    localStorage.clear();
  }

  /*
   *To create a reactive form instance
   */
  createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      'password': new FormControl('', [Validators.required])
    })
  }

  saveLoginForm() {
    // this.getToken.fetchUserToken(this.loginForm.value)
    // .subscribe((response) => {
    //   this.router.navigate(['dashboard']);
    //   this.notificationsService.success('Login Successfully');
    // }, (error) => {
    //   this.notificationsService.error('Login failed');
    // });
    this.router.navigate(['dashboard']);
  }

}
