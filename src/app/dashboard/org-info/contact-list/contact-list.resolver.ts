import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { ApiIntegrationService } from "src/app/core";

@Injectable()

export class ContactListResolve implements Resolve<any>{

    constructor(private apiIntegrationService: ApiIntegrationService){}

    resolve(route: ActivatedRouteSnapshot) {
        return this.apiIntegrationService.getActiveContactList();
    }
}