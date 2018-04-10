import { HttpErrorResponse } from "@angular/common/http";
import { HttpClientError } from "./client-error";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpErrorHandler {

    clientErrors : { [id: number]: HttpClientError }

    constructor() {
        this.clientErrors = {
            400: {
                status: 400 ,
                statusText: 'Bad Request'
            },
            404: {
                status: 404 ,
                statusText: 'Resource Not Found'
            }
        }
    }

    handleErrors(error: HttpErrorResponse) {
        if(error.error instanceof ErrorEvent) {
          console.log(error.message);
        } else {
          if(error.status >= 400 && error.status < 500) {
            let statusMessage = this.clientErrors[error.status].statusText;
            if(statusMessage === undefined) {
                alert('Client Side Error Occured');
            } else {
                alert(statusMessage);
            }
          } else if(error.status >= 500) {
            //new ServerError(error); 
          } else {
            //new AppError(error.);
          }
        }
    }
      
}