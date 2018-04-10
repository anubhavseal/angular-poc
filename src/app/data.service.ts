import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpErrorHandler } from './HttpErrorHandler.service';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { HttpObserve } from '@angular/common/http/src/client';

@Injectable()
export class DataService {

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) { }
  
  get<T>(apiUrl: string, {observe = 'body', responseType = 'json'}: RequestConfig = {}) {
    return this.http.get<T>(apiUrl,{
      observe: observe as any,
      responseType: responseType as any, 
    })
    .catch(error => {
      this.httpErrorHandler.handleErrors(error);
      return new Observable();
    })
  }

  put<T>(apiUrl: string, body: any) {
    return this.http.put<T>(apiUrl, body, {
      observe: "response"
    });
  } 
}

class RequestConfig {
  observe?: HttpObserve
  responseType?: "arraybuffer" | "blob" | "json" | "text";
}
