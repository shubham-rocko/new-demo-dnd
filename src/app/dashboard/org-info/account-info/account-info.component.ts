import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  public accountInformation: Array<object>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTaskListData();
  }

  getTaskListData() {
    this.accountInformation = this.route.snapshot.data['accountInformation'];
  }

}
