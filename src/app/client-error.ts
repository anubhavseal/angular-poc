import { HttpErrorResponse } from "@angular/common/http";

export class HttpClientError {
    status: number
    statusText: string
}

class HttpClientErrorMock {

    constructor(private error: HttpErrorResponse){}

    errors: HttpClientError[] = [
        {
            status: 400 ,
            statusText: 'Bad Request'
        },
        {
            status: 404 ,
            statusText: 'Resurce Not Found'
        }
    ]

    notifyError() {

    }
}