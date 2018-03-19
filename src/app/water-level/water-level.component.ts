import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';

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
  private _data = {};

  @Input()
  set data(data: any) {
    if (data.porcentagem || data.porcentagem != null) {
      this.porcentagem = Number(data.porcentagem);
      this.litros = data.litros;

      if (this.porcentagem >= 0.5) {
        this.alert = 'success';
      } else if (this.porcentagem > 0.25) {
        this.alert = 'warning';
      } else {
        this.alert = 'danger';
      }
      this.banhos = this.litros / 20;
      this.lavarRoupa = this.litros / 16;
      this.descarga = this.litros / 20;
    }
  }

  get data(): any { return this._data; }


  constructor() { }

  ngOnInit() {

  }

}
