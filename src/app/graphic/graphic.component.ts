import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  protected lineChartType  = 'line';
  protected lineChartLabels = ['Nível'];
  protected lineChartData = [
    [28, 48, 40, 19, 86, 27, 90]
  ];

  protected lineChartOptions = {
    responsive: true
  };

  protected lineChartColors = [
    {
      backgroundColor: '#89C4F4',
      borderColor: '#22A7F0',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  chartClicked(e: any) {
    console.log(e);
  }

  chartHovered(e: any) {
    console.log(e);
  }

}
