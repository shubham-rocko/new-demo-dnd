import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contactList: Array<object>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getContactListData();
  }

  getContactListData() {
    this.contactList = this.route.snapshot.data['contactList'];
  }

}
