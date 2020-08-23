# ChartBuilder

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

# What is this?

Chart builder is an angular chart library. 

# Chart

- **Progress Bar**
- **Pie Chart**

# Getting started

First, install the latest stable version. 
There are two basic chart types, Progress Bar and Pie Chart.

# Accept Properties for Progress Bar : 
- **data** - is a number type, indicate the percentage out of 100. **Required** property. 
- **labels** - is a string type. Example: "Completed"
- **width** - is a string type. Width of the progress bar. Example: "500px" or "80%"
- **height** - is a string type. Height of the progress bar. Example: "50px" or "40%"
- **chartType** - is a string type. Example: "progress"

### Default Features

The default width of Progress bar is 300px and default height is 30px.

# Accept Properties for Pie Chart : 
- **data** - is an array type. **Required** property. 
- **labels** - is a string type. Example: "Completed"
- **width** - is a number type. Width of the Pie canvas. Example: 400 
- **height** - is a string type. Height of the Pie canvas. Example: 400 
- **chartType** - is a string type. Example: "pie"

### Default Features

The default width of Pie canvas is 400 and default height is 400. 

# Installation 

For the latest stable version:

`npm i angular-chart-builder`

Then...

**app.module.ts**

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartBuilderModule } from 'angular-chart-builder';

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

then...

**app.component.ts**

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

**app.component.html**

```
<pm-chart-builder
      [data]="chartData"
      [labels]="chartLabels"
      [width]="chartWidth"
      [height]="chartHeight"
      [chartType]="chartType">
    </pm-chart-builder>

```

# Pie Chart integration

app.module.ts keep as it is.

then...

**app.component.ts**

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pieLabels = 'Working hour in July';     // string type
  public pieData = [
    { name: 'param', value: 176 },
    { name: 'debo', value: 180 },
    { name: 'rahul', value: 150 },
    { name: 'biswa', value: 140 },
    { name: 'dipan', value: 160 }
  ];
  public pieType = 'pie';   // string type
  public pieWidth = 300;   // number type
  public pieHeight = 300;  // number type
}

```

then...

**app.component.html**

```
<pm-pie-chart
  [data]="pieData"
  [labels]="pieLabels"
  [width]="pieWidth"
  [height]="pieHeight"
  [chartType]="pieType">
</pm-pie-chart>

```

# Technical Support

- param23.03@gmail.com

# Licensing

Free

