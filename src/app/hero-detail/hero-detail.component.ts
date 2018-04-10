import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input("hero") incomingHero: Hero
  @Output() deleteHeroRequest = new EventEmitter <Hero>();
  apply = true;
  falsy = false;
  //special = 'special';
  constructor() { }

  delete(): void  {
    return this.deleteHeroRequest.emit(this.incomingHero);
  }

  ngOnInit() {
  }

}
