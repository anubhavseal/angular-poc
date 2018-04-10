import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './data/mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { DataService } from './data.service'
import { Post} from './models/hero';
@Injectable()
export class HeroService {

  apiBasePath = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: HttpClient, private data: DataService){}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  } 

  getPosts() {
    this.data.get(this.apiBasePath)
    .subscribe(res => {
      console.log(res);
    });
  }


}
