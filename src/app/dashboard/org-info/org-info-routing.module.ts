import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { OrgInfoComponent } from './org-info.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountInfoResolve } from './account-info/account-info.resolver';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListResolve } from './contact-list/contact-list.resolver';
import { CreateAccountResolve } from './create-contact/create-account.resolve';

const orgInfoRoutes: Routes = [
    { path: '', component: OrgInfoComponent, children: [
        { path: '', redirectTo: 'account-info', pathMatch: 'full' },
        { path: 'account-info', component: AccountInfoComponent, resolve: {
            accountInformation: AccountInfoResolve
        } },
        { path: 'create-account', component: CreateAccountComponent },
        { path: 'contact-list', component: ContactListComponent, resolve: {
            contactList: ContactListResolve
        } },
        { path: 'create-contact', component: CreateContactComponent, resolve: {
            shortedAccount: CreateAccountResolve
        } }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(orgInfoRoutes)],
    exports: [RouterModule]
})

export class OrgInfoRoutingModule {
}
