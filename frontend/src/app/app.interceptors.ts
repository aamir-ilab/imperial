
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if (token !== null && token.length > 0) {
            req = req.clone({ headers: req.headers.set('Authorization', `${token}`) });
        }
        // return next.handle(req);

        // add interceptor to the call back from server,
        // if token expired then show message that session expired.
        return next.handle(req).pipe(
          map((res: any) => {
            if (res && res.status === 401) {
              console.error(res.message);
            }
            return res;
          }),
          catchError((e: any) => {
            console.error(e && e.status ? e : 500);
            return throwError(e);
          })
        );

    }

}
