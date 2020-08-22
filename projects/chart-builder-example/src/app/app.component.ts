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
