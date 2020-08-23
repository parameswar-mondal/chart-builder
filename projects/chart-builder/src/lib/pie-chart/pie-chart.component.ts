import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pm-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterViewInit {
  @Input() labels: string;
  @Input() chartType: string;
  @Input() data: any[];
  @Input() width: number;
  @Input() height: number;

  @ViewChild('pieCanvas')
  pieCanvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieLabel')
  pieLabel: ElementRef;

  public context: CanvasRenderingContext2D;

  pieRadius: number = 100;     // Pie Radius Default Value
  canvasWidth: number = 400;   // Canvas Default Value
  canvasHeight: number = 400;  // Canvas Default Value
  canvasLabel: string = '';    // Canvas Default Value

  constructor() { }

  // Random Color Code generate for Pie segment
  public randomHexColorCode(){
    return "#" + Math.random().toString(16).slice(2, 8);
  }

  ngOnInit(): void {
    if(!isNaN(Number(this.width))){
      this.canvasWidth = Number(this.width);
    }
    if(!isNaN(Number(this.height))){
      this.canvasHeight = Number(this.height);
    }
    this.canvasLabel = (this.labels && typeof this.labels !== undefined) ? this.labels : '';
    this.pieRadius = Math.min((this.canvasHeight/4), (this.canvasWidth/4));
  }

  ngAfterViewInit() {
    let canvas = this.pieCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    let ctx = this.context;
    canvas.width = this.canvasWidth;            // default 400
    canvas.height = this.canvasHeight;          // default 400
    let total = this.data.reduce((ttl, house) => {
      return ttl + house.value;
    }, 0);
    let startAngle = 0;
    let radius = this.pieRadius;                // default r = 100
    let cx = canvas.width/2;
    let cy = canvas.height/2;

    this.data.forEach( house => {
      // set the styles before beingPath
      ctx.fillStyle = this.randomHexColorCode();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#333';

      // draw the pie widgets
      let endAngle = ((house.value/total) * Math.PI * 2) + startAngle;    // 2*PI*r
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle, false);
      ctx.lineTo(cx, cy);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      // add the labels
      ctx.beginPath();
      ctx.font = '12px Helvetica, Calibri';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rebeccapurple';
      // midpoint between two angles
      // 1.5 * radius is the length of the Hypotenuse
      let theta = (startAngle + endAngle) / 2;
      let deltaY = Math.sin(theta) * 1.3 * radius;
      let deltaX = Math.cos(theta) * 1.3 * radius;
      ctx.fillText(house.name, deltaX+cx, deltaY+cy);
      ctx.closePath();
      startAngle = endAngle;
    });

    // Pie Chart Label
    let pieLabelDiv = this.pieLabel.nativeElement;
    pieLabelDiv.style.width = canvas.width + 'px';
    pieLabelDiv.style.textAlign = 'center';
  }

}
