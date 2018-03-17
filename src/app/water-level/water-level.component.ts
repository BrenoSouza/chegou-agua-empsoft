import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-water-level',
  templateUrl: './water-level.component.html',
  styleUrls: ['./water-level.component.css']
})
export class WaterLevelComponent implements OnInit {

  constructor(private chat: ChatService) { }

  protected porcentagem: string;

  ngOnInit() {
    this.chat.messages.subscribe(level => {
      console.log(level);
      this.porcentagem = level;
    });
  }
}

