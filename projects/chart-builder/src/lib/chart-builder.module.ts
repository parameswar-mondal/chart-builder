import { NgModule } from '@angular/core';
import { ChartBuilderComponent } from './chart-builder.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';



@NgModule({
  declarations: [ChartBuilderComponent, PieChartComponent],
  imports: [
  ],
  exports: [ChartBuilderComponent, PieChartComponent]
})
export class ChartBuilderModule { }
