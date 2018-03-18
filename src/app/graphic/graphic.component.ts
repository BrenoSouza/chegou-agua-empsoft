import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  protected lineChartType  = 'line'; 
  protected lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  constructor() { }

  ngOnInit() {
  }

  // lineChart
  public lineChartData:Array<any> = [
    [],
    [28, 48, 40, 19, 86, 27, 90]
  ];


  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
