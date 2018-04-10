import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppHighlightDirective } from './app-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ValueService } from './value.service';
import { MasterService } from './master.service';
import { LightswitchComponent } from './lightswitch/lightswitch.component';
import { DataService } from './data.service';
import { HttpErrorHandler } from './HttpErrorHandler.service';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    AppHighlightDirective,
    UnlessDirective,
    LightswitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService, ValueService, MasterService, DataService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
