import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ChatService } from '../chat.service';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-water-level',
  templateUrl: './water-level.component.html',
  styleUrls: ['./water-level.component.css']
})
export class WaterLevelComponent implements OnInit {
  protected alert = 'success';
  protected porcentagem = 0;
  protected litros = 0;
  protected banhos = 0;
  protected lavarRoupa = 0;
  protected descarga = 0;
  protected sentinell = false;

  @Output() newValue: EventEmitter<any> = new EventEmitter();

  protected _level = '';

  @Input()
  set level(level: any) {
    if (this.sentinell) {
      this.porcentagem = level.porcentagem;
      this.litros = level.litros;
      this.sentinell = false;

      if (this.porcentagem >= 50) {
        this.alert = 'success';
      } else if (this.porcentagem > 25) {
        this.alert = 'warning';
      } else {
        this.alert = 'danger';
      }
    }

  }

  get level(): any { return this._level; }

  // Doughnut
  public dougChartData: Array<any> = [{}];

  protected doughnutChartLabels: string[] = ['Porcentagem de Água', 'Pocentagem Vazia' ];
  protected doughnutChartData: number[] = [];
  protected doughnutChartType: string = 'doughnut';

  protected dougChartColors = [
    {
      backgroundColor: ['#89C4F4', 'rgba(148,159,177,0.2)'],
      borderColor: ['#22A7F0']
    }
  ];

  constructor(private socketService: ChatService,
              private crud: CrudServiceService) { }

  ngOnInit() {
    if (this.porcentagem === 0) {

      this.crud.getHistorico().subscribe(data => {
        const array = data.obj;

        this.porcentagem = Number(array[array.length - 1].porcentagem) * 100;
        this.litros = Number(array[array.length - 1].litros);

        this.banhos = this.litros / 20;
        this.lavarRoupa = this.litros / 16;
        this.descarga = this.litros / 20;

        this.dougChartData = [{data: [this.porcentagem, 100 - this.porcentagem], label: ['Nível de Água', 'Vazio']}];
      }, error => {
        console.log(error);
      });
    }

    this.socketService.messages.subscribe(data => {
      if (data.porcentagem || data.porcentagem != null) {
        this.porcentagem = Number(data.porcentagem) * 100;
        this.litros = data.litros;
        this.dougChartData = [{data: [this.porcentagem, 100 - this.porcentagem], label: ['Nível de Água', 'Vazio']}];
        if (this.porcentagem >= 50) {
          this.alert = 'success';
        } else if (this.porcentagem > 25) {
          this.alert = 'warning';
        } else {
          this.alert = 'danger';
        }

        this.banhos = this.litros / 20;
        this.lavarRoupa = this.litros / 16;
        this.descarga = this.litros / 20;
      } else {
        this.sentinell = true;
      }
    });
  }

    // events
    public chartClicked(e:any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }

}
