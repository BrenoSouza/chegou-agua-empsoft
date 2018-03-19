import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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


  constructor(private socketService: ChatService) { }

  ngOnInit() {
    this.socketService.messages.subscribe(data => {
      if (data.porcentagem || data.porcentagem != null) {
        this.porcentagem = Number(data.porcentagem) * 100;
        this.litros = data.litros;

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

}
