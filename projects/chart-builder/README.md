# ChartBuilder

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

# What is this?

Chart builder is an angular chart library. 

# Chart

Progress Bar

# Installation 

`npm i angular-chart-builder`

Then...

app.module.ts

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChartBuilderModule} from 'angular-chart-builder';

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

```

app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parameswar';
  public chartLabels = 'Completed';
  public chartData = 80;
  public chartType = 'progress';
  public chartWidth = '400px';
  public chartHeight = '40px';
}

```

then...

app.component.html

```
<pm-chart-builder
      [data]="chartData"
      [labels]="chartLabels"
      [width]="chartWidth"
      [height]="chartHeight"
      [chartType]="chartType">
    </pm-chart-builder>

```

