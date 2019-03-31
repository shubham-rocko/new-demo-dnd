import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { NotFoundComponent } from "./shared/component/not-found/not-found.component";
import { AuthGuard } from "./core/services/auth-guard.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    // canActivate: [AuthGuard]
  },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
  { path: "**", redirectTo: '404', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
