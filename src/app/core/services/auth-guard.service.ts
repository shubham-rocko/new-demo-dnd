import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { UserInfoService } from "./security.service";

@Injectable()

export class AuthGuard implements CanActivate {

    public loginBody: object = {};

    constructor(private router: Router,
        private userInfoService: UserInfoService){}

    setAuthentication(body){
        this.loginBody = body;
    }

    canActivate(){
        var token = this.userInfoService.authToken.get();
        if(token){
            return of(true);
        }else{
            this.router.navigate(['auth/login']);
            return of(false);
        }
    }

    
}