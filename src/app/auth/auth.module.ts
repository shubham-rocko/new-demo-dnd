import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [AuthRoutingModule, ReactiveFormsModule, FormsModule, CommonModule]
})
export class AuthModule {}
