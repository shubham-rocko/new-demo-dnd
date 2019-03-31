import { Injectable } from "@angular/core";
import "rxjs";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class UserInfoService {
    _info: any = null;
    get() {
        return this._info || {};
    }
    set(info) {
        this._info = info;
    }
    reset() {
        this._info = null;
        this.authToken.clear();
    }

    authToken = {
        _token: null,
        set: function (token: string) {
            this._token = localStorage.setItem("id_token", token);
        },
        get: function () {
            if (localStorage.getItem("id_token") && !this._token) {
                this._token = localStorage.getItem("id_token");
            }
            return localStorage.getItem("id_token");
        },
        clear: function () {
            localStorage.removeItem("id_token");
            this._token = null;
        },
        isSet: function () {
            return this.get() ? true : false;
        }
    };
}

@Injectable()
export class GetToken {
    public apiURL = environment;
    constructor(private httpClient: HttpClient
    ) { }
    fetchUserToken(body): Observable<boolean> {

        return this.httpClient.post("user/login", body)
            .map(response => {
                localStorage.setItem('id_token' ,response['accessCode']);
                return response['user'];
            });
        }

    }
