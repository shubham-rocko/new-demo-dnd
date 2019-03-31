import { Injectable } from "@angular/core";
// import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
// import { Config } from "../../../config";
// import { LoaderService } from "../loader-spinner";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
} from "@angular/common/http";
import { LoaderService } from "src/app/shared/component/loader-spinner/loader-spinner.service";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    public apiURL = environment.apiURL;

    constructor(private loaderService: LoaderService,
        private router: Router) {
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        var urlRegEx = new RegExp("login", "ig");
        var token = localStorage.getItem('id_token');
        if (request.url.match(urlRegEx)) {
            request = request.clone({
                url: this.apiURL + request.url,
                setHeaders: {
                    "Content-Type": "application/json",
                }
            });
        } else {
            this.loaderService.show();
            // let config = new Config();
            request = request.clone({
                url: this.apiURL + request.url,
                setHeaders: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            });
        }

        return next.handle(request).do(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.loaderService.hide();
                }
            },
            (err: any) => {
                if (
                    err.status == 500 ||
                    err.status == 501 ||
                    err.status == 404 ||
                    err.status == 400 ||
                    err.status == 0
                ) {
                } else {
                    this.router.navigate(['auth/login']);
                }
                this.loaderService.hide();
            }
        );
    }
}