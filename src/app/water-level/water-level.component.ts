import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-water-level',
  templateUrl: './water-level.component.html',
  styleUrls: ['./water-level.component.css']
})
export class WaterLevelComponent implements OnInit {
  protected porcentagem;
  protected litros;
  constructor(private socketService: ChatService) { }

  ngOnInit() {
    this.socketService.messages.subscribe(data => {
      this.porcentagem = data.porcentagem;
      this.litros = data.litros;
    });
  }

}
