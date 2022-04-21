import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, finalize, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class requestHttp {
    public loader = 0;
    constructor(private http: HttpClient) { }



    post<T>(service: any, data: any, contentType = 'application/json') {
        const token = localStorage.getItem('authToken');
        // const user = localStorage.getItem('user');
        // data.usuario = JSON.parse(user)?.name;

        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: token ? `Bearer ${token}` : ''
            }),
        };
        // if (contentType) {
        //   httpOptions.headers['Content-Type'] = contentType;
        // }
        this.loader += 1;
        const url = `${environment.apiUrl}/${service}`;
        return this.http.post<T>(url, data, httpOptions).pipe(
            // catchError((e) => { this.loader = Math.max(0, this.loader - 1); return throwError(e); }), // empty list on error
            // tap(() => this.loader = Math.max(0, this.loader - 1)),
            finalize(() => this.loader = Math.max(0, this.loader - 1))
        );
    }
    get<T>(service: any, params = null) {
        const token = localStorage.getItem('authToken');
        this.loader += 1;
        const url = `${environment.apiUrl}/${service}`;
        return this.http.get<T>(url).pipe(
            finalize(() => this.loader = Math.max(0, this.loader - 1))
        );
    }

}
