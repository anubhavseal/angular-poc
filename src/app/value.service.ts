import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/observable/of';
@Injectable()
export class ValueService {

  constructor() { }
  getValue() {
    return 'real value';
  }
  getObservable(): Observable<number>{
    return Observable.of(42);
    //.interval(1000);
  }
}
