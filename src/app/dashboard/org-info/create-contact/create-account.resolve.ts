import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";

import { ApiIntegrationService } from "src/app/core";

@Injectable()
export class CreateAccountResolve implements Resolve<any>{

    constructor(private apiIntegrationService: ApiIntegrationService){}

    resolve(){
        return this.apiIntegrationService.getShortedAccountList();
    }

}