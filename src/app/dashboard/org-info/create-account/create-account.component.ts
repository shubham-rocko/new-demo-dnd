import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiIntegrationService } from 'src/app/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public createTaskForm: FormGroup;

  constructor(private router: Router,
    private apiIntegrationService: ApiIntegrationService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.createTaskForm = new FormGroup({
      name : new FormControl(),
      annualRevenue : new FormControl(),
      billingAddress : new FormControl(),
      fax : new FormControl(),
      industry : new FormControl(),
      phone : new FormControl(),
      shippingAddress: new FormControl(),
      website : new FormControl(),
      yearStarted : new FormControl()
    });
  }

  // {
  // }


  taskCreated() {
    this.apiIntegrationService.createNewAccount(this.createTaskForm.value)
      .subscribe((response) => {
        this.router.navigate(['../']);
      })
  }
}
