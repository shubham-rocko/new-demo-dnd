import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            { path: '', redirectTo: 'tasks', pathMatch: 'full' }, 
            { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
            { path: 'org-info', loadChildren: './org-info/org-info.module#OrgInfoModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {
}
