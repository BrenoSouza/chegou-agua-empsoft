import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  protected lineChartType  = 'line';
  protected lineChartLabels = ['Nível'];
  protected lineChartData = [];

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

  constructor(public crud: CrudServiceService) { }

  ngOnInit() {
    this.crud.getHistorico().subscribe(array => {
      this.lineChartData.push(array);
    }, error => {
      console.log(error);
    });
  }

  chartClicked(e: any) {
    console.log(e);
  }

  chartHovered(e: any) {
    console.log(e);
  }

}
