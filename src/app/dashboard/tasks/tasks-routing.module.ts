import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {DndPageComponent} from './dnd-page/dnd-page.component';
import {CreateTaskComponent} from './create-task/create-task.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskListResolve} from './task-list/task-list.resolver';
import { TasksComponent } from './tasks.component';

const dashboardRoutes: Routes = [
    {
        path: '', component: TasksComponent,  children: [
            {path: '', redirectTo: 'grid', pathMatch: 'full'},
            {path: 'grid', component: DndPageComponent, resolve: {
                    taskList: TaskListResolve
                }},
            {path: 'create-task', component: CreateTaskComponent},
            {
                path: 'tasks-details', component: TaskListComponent, resolve: {
                    taskList: TaskListResolve
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class TasksRoutingModule {
}
