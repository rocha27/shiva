import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LpcoModule} from './feature/lpco/lpco.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LpcoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
