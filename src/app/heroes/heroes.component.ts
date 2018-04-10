import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[]
})
export class HeroesComponent implements OnInit {

  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;
  post

  constructor(private heroService: HeroService, private value: ValueService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  deleteHero(event: Hero): void {
    console.log(event);
  }

  selectHero(hero: Hero): void{
    this.selectedHero = hero
    let p = <Object>this.hero;
    this.cast(p)
  }
  cast<T>(data: T){
    //let b = data.name ;
  }
  ngOnInit() {    
    this.heroService.getPosts();
      // .subscribe(response => {
        
      //   this.post = {
      //     title:response.id
      //   }
      // });

    // this.getHeroes();
    // console.log(this.value.getObservable())
    // this.value.getObservable()
    // .subscribe((value) => {
    //   console.log(value)
    // })
  }

}
