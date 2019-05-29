import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrManager,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'api/';
    req = req.clone({
        url: url + req.url,
    });

    return next.handle(req).pipe(
      catchError((err, caught) => {
        /// Auto display errors in the background with status 460.
        if (err.status === 460) {
          this.toastr.errorToastr(err.error.message);
        }
        return observableThrowError(err);
      })
    );
  }
}
