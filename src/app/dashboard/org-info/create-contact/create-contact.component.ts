import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiIntegrationService } from 'src/app/core';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  public shortedAccount;
  public createContactForm: FormGroup;
  public accountListArray: Array<object> = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private apiIntegrationService: ApiIntegrationService) { }

  ngOnInit() {
    this.shortedAccount = this.route.snapshot.data['shortedAccount'];
    this.createForm();
    this.getShortedAccount();
  }

  getShortedAccount(){
      this.shortedAccount.forEach((account) => {
        let data = {
          value: account.accountId,
          label: account.name
        }
        this.accountListArray.push(data);
      });
  }

  createForm() {
    this.createContactForm = new FormGroup({
    name : new FormControl(),
    birthDate : new FormControl(),
    department : new FormControl(),
    description : new FormControl(),
    doNotCall : new FormControl(),
    email : new FormControl(),
    fax : new FormControl(),
    homePhone : new FormControl(),
    mailingAddress : new FormControl(),
    mobile : new FormControl(),
    otherAddress : new FormControl(),
    otherPhone : new FormControl(),
    title : new FormControl(),
    account : new FormControl()     
    });
  }

  // {
          //   "name" : "Contact5 User",
  //   "birthDate" : "05-20-1993",
  //   "department" : "pharma",
  //   "description" : "medical field",
  //   "doNotCall" : false,
  //   "email" : "abc@def.com",
  //   "fax" : "54323216",
  //   "homePhone" : "7874121214",
  //   "mailingAddress" : "51st Avenue, spring Road",
  //   "mobile" : "21128721",
  //   "otherAddress" : "51st Avenue, spring Road",
  //   "otherPhone" : "15158974123",
  //   "title" : "user5 contact5",
  //   "account" : "5c8cdecee5d686544cf4e228"
 
  // }


  onSubmittedContactForm() {
    this.apiIntegrationService.createNewContact(this.createContactForm.value)
      .subscribe((response) => {
        this.router.navigate(['../']);
      })
  }
}
