import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { SelectModule } from 'ng-select';

import { OrgInfoComponent } from './org-info.component';
import { OrgInfoRoutingModule } from './org-info-routing.module';
import { AccountInfoResolve } from './account-info/account-info.resolver';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ContactListResolve } from './contact-list/contact-list.resolver';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { OrgInfoSidebarComponent } from './org-info-sidebar/org-info-sidebar.component';
import { CreateAccountResolve } from './create-contact/create-account.resolve';
import { OnlyNumberModule, NoDecimalModule } from 'src/app/shared/directives';

@NgModule({
  declarations: [
    OrgInfoComponent,
    AccountInfoComponent,
    CreateAccountComponent,
    ContactListComponent,
    CreateContactComponent,
    OrgInfoSidebarComponent
  ],
  imports: [
    CommonModule,
    SelectModule,
    ReactiveFormsModule,
    FormsModule,
    MomentModule,
    OrgInfoRoutingModule,
    OnlyNumberModule,
    NoDecimalModule
  ],
  providers: [
    AccountInfoResolve,
    ContactListResolve,
    CreateAccountResolve
  ]
})
export class OrgInfoModule { }
