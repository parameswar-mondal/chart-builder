import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'pm-chart-builder',
  templateUrl: './chart-builder.component.html',
  styleUrls: ['./chart-builder.component.css']
})
export class ChartBuilderComponent implements OnInit, AfterViewInit {
  @Input() labels: String;
  @Input() data: Number;
  @Input() chartType: String;
  @Input() width: String;
  @Input() height: String;

  @ViewChild('innerProgress')
  innerProgress: ElementRef;
  @ViewChild('progress')
  progress: ElementRef;

  progressData: Number = 0;
  progressLabel: any = '';

  constructor() { }

  ngOnInit(): void {
    if(!isNaN(Number(this.data))){
      let numberValue = Number(this.data);
      this.progressData = (numberValue > 100) ? 100 : numberValue;
      this.progressLabel = (this.labels && typeof this.labels !== undefined ) ? `${this.labels} ${this.progressData}%` :  `${this.progressData}%`;
    }
  }

  ngAfterViewInit() {
    let progressDiv = this.progress.nativeElement;
    progressDiv.style.width = (this.width && typeof this.width !== undefined) ? this.width : '300px';
    progressDiv.style.height = (this.height && typeof this.height !== undefined) ? this.height : '30px';

    let progressBar = this.innerProgress.nativeElement;
    setInterval(() => {
      progressBar.style.width = progressBar.getAttribute('data-done') + '%';
      progressBar.style.opacity = 1;
    }, 500);
  }

}
