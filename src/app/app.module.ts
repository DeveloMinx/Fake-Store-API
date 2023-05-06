import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CardsComponent } from './components/cards/cards.component';
import {HttpClientModule} from '@angular/common/http';
import { PrincipalComponent } from './components/principal/principal.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardsComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
