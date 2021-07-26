import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import {MessageService} from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService,
        private messageService: MessageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();
            }

            if (err.status === 400) {

                if(err.error && err.error.errors){
                    // err.error.errors.forEach(element => {
                    //     this.notification.create(
                    //         'warning',
                    //         'Uyarı',
                    //         element,
                    //         { nzPlacement: "bottomRight" }
                    //     );
                    // });

                }else if(err.error){
                    this.messageService.add({severity:'warn', summary:'Uyarı', detail:err.error});
                }
            }
            if (err.status === 500 || err.status===0) {
                this.messageService.add({severity:'error', summary:'Hata Oluştu', detail:'Üzgünüz! Sistemde beklenmedik bir hata oluştu. Lütfen tekrar deneyiniz'});
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
