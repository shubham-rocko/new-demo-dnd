import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragulaModule } from "ng2-dragula";
import { SelectModule } from 'ng-select';
import { MomentModule } from 'angular2-moment';

import { HeaderComponent } from "./header/header.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    TabBarComponent
  ],
  imports: [
    CommonModule,
    DragulaModule.forRoot(),
    SelectModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,
    MomentModule
  ],
  providers: [
  ]
})
export class DashboardModule { }
