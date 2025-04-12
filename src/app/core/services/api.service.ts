import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {environment} from "@rnv/environment";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected baseURL: string = environment.apiUrl;
  protected httpClient: HttpClient;

  constructor(protected injector: Injector) {
    this.httpClient = this.injector.get(HttpClient);
  }

  public request<T>(method: string, url: string, options: any): Observable<any> {
    return this.httpClient.request<T>(method, url, options).pipe(
      take(1),
      catchError((error) => {
        return throwError(error);
      }),
    );
  }

  head<T>(url: string, params = {}): Observable<T> {
    return this.request('head', url, params);
  }

  get<T>(url: string | Array<string | number>, params = {}): Observable<T> {
    return this.request('get', this.pathUrl(url), params);
  }

  patch<T>(url: string, params = {}): Observable<T> {
    return this.request('patch', url, params);
  }

  post<T>(url: string | Array<string | number>, body = {}, params = {}): Observable<T> {
    return this.request('post', this.pathUrl(url), { body, params });
  }

  put<T>(url: string | Array<string | number>, body = {}, params?: any): Observable<T> {
    return this.request('put', this.pathUrl(url), { body, params });
  }

  delete<T>(url: string | Array<string | number>, params = {}, body?: any): Observable<T> {
    return this.request('delete', this.pathUrl(url), { body, params });
  }

  pathUrl(reqUrl: string | Array<string | number>): string {
    let value = JSON.parse(JSON.stringify(reqUrl));
    if (Array.isArray(value)) {
      if (this.baseURL) {
        value.unshift(this.baseURL);
      }

      value = (value as any[]).join('/');
    } else {
      value = this.baseURL + '/' + value;
    }

    return value;
  }
}
