import { Component, OnInit, Input } from '@angular/core';
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
  protected isDataAvailable = false;

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

  private _data = {};

  @Input()
  set data(data: any) {
    if (data.porcentagem || data.porcentagem != null) {
      const newData = this.lineChartData.slice();
      newData.push(data.porcentagem * 100);
      this.lineChartData = newData;
    }
  }

  get data(): any { return this._data; }

  constructor(public crud: CrudServiceService) { }

  ngOnInit() {
    this.crud.getHistorico().subscribe(data => {
      const array = data.obj;
      const elements = [];
      array.forEach(element => {
        elements.push(element.porcentagem * 100);
      });
      this.lineChartData = elements;
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
