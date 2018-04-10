import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from '../models/hero';

describe('HeroDetailComponent', () => {
  // let component: HeroDetailComponent;
  // let fixture: ComponentFixture<HeroDetailComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ HeroDetailComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HeroDetailComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  const hero: Hero = {'id': 10, 'name': 'Anubhav'};
  it('should raise hero event', () => {
    const component = new HeroDetailComponent();
    component.incomingHero = hero;
    component.deleteHeroRequest.subscribe(value => {
      expect(hero).toBe(value);
    });
    component.delete();
  })
});
