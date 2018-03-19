import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  public lineChartData: Array<any> = [{}];
  public lineChartLabels: Array<any> = [];
  protected lineChartType = 'line';
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

  @Output() actualLevel: EventEmitter<any> = new EventEmitter();

  constructor(public crud: CrudServiceService) { }

  ngOnInit() {
    this.crud.getHistorico().subscribe(data => {
      const array = data.obj;
      const elements: Array<any> = [];
      let aux = 1;

      array.forEach(element => {
        this.lineChartLabels.push(aux + 'º');
        aux += 1;
        elements.push(element.porcentagem * 100);
        if (aux - 1 === array.length) {
          this.actualLevel.emit(array[aux - 2]);
        }
      });
      this.lineChartData = [{data: elements, label: 'Nível de Água'}];
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
