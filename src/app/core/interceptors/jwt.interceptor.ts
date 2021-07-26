import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { User } from '../models/auth.models';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let currUser=this.authenticationService.currentUser();

        return currUser != null
            ? this.handleRequestWithTokenHeader(currUser.token, request, next)
            : next.handle(request);
    }

    private handleRequestWithTokenHeader(
        token: string,
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<any> {

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });

        return next.handle(req);
    }
}
