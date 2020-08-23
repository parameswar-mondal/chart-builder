import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parameswar';
  // Below prop used for Progress Bar

  public chartLabels = 'Completed';
  public chartData = 80;
  public chartType = 'progress';
  public chartWidth = '300px';
  public chartHeight = '30px';


  // Below prop used for Pie Chart
  public pieLabels = 'Employees Salary';
  public pieData = [
    { name: 'param', value: 54000 },
    { name: 'debo', value: 63000 },
    { name: 'rahul', value: 60000 },
    { name: 'biswa', value: 65000 },
    { name: 'dipan', value: 62000 }
  ];
  public pieType = 'pie';
  public pieWidth = 300;
  public pieHeight = 300;
}
