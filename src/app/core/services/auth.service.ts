import { Injectable } from '@angular/core';

import { User } from '../models/auth.models';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';

@Injectable({ providedIn: 'root' })
export class AuthService {
    user: User | null = null;

    constructor() { }

    /**
     * Returns the current user
     */
    public currentUser(): User | null {

        const helper = new JwtHelperService();

        let token = localStorage.getItem("token");

        if (!token || helper.isTokenExpired(token))
            return null;

        const decodedToken = helper.decodeToken(token);

        let user: User = {
            identityNo: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
            name: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"] || decodedToken["name"],
            roles: decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
            token: token
        };

        this.user = user;
        return user;
    }

    hasRole(role: string) {
        return this.user && this.user.roles && this.user.roles.indexOf(role) > -1;
    }

    login(username: string, password: string): Observable<any> {
        ////TODO: add login service
        // return this.accountService.apiAccountPost({ tcNo: username, password: password })
        //     .pipe(tap(token => localStorage.setItem("token", token)));

        localStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiU2FsaWggRGVtaXIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiQWRtaW4iXSwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxIiwiaWF0IjoxNTk2NDgwMzUxLCJleHAiOjE1OTY0ODQwNzMsImp0aSI6IjFiMDJiZDNmLTAyMmQtNDM0Zi1iMTJmLTgwNzgzYjA4MWY1ZSJ9.jBmR5JvGUyzuD1ZaUA5lpECduijH5tnt7cUONTzcuAA");

        return new Observable();
    }

    logout() {
        localStorage.removeItem('token');
        this.user = null;
    }
}

