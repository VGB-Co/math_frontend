import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestClient } from './Mocky/rest.client';
import { GameComponent } from './game/game.component';
import { LadeboardComponent } from './ladeboard/ladeboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GameComponent,
    LadeboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
