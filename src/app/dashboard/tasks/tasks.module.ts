import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';
import {DragulaModule} from 'ng2-dragula';

import {DndPageComponent} from './dnd-page/dnd-page.component';
import {NavSidebarComponent} from './nav-sidebar/nav-sidebar.component';
import {CreateTaskComponent} from './create-task/create-task.component';
import {TaskListComponent} from './task-list/task-list.component';
import {SelectModule} from 'ng-select';
import {TaskListResolve} from './task-list/task-list.resolver';
import {NoDecimalModule, OnlyNumberModule} from 'src/app/shared/directives';
import {TasksRoutingModule} from './tasks-routing.module';
import {TasksComponent} from './tasks.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';


@NgModule({
    declarations: [
        TasksComponent,
        DndPageComponent,
        NavSidebarComponent,
        CreateTaskComponent,
        TaskListComponent
    ],
    imports: [
        CommonModule,
        DragulaModule.forRoot(),
        SelectModule,
        ReactiveFormsModule,
        FormsModule,
        NoDecimalModule,
        OnlyNumberModule,
        MomentModule,
        TasksRoutingModule,
        NgxMyDatePickerModule.forRoot()
    ],
    providers: [
        TaskListResolve
    ]
})
export class TasksModule {
}
