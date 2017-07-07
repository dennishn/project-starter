import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {TrelloService} from "./models/trello/trello.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMaterialModule} from "./shared/material.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    // Project Specific
    CoreModule,
    AppMaterialModule
  ],
  providers: [
      TrelloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
