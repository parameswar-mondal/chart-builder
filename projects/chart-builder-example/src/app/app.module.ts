import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChartBuilderModule} from 'chart-builder';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
