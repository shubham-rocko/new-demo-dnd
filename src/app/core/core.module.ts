import { NgModule } from "@angular/core";
import { ApiIntegrationService } from "./services/api-integration.service";
import { HttpInterceptorService } from "./services/interceptor-service";
import { UserInfoService, GetToken } from "./services/security.service";
import { AuthGuard } from "./services/auth-guard.service";

@NgModule({
    providers: [
        AuthGuard,
        ApiIntegrationService,
        UserInfoService,
        GetToken
    ]
})

export class CoreModule{}