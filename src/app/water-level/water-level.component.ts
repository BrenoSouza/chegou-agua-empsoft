import { Component, OnInit } from '@angular/core';
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
      }
    });
  }

}
