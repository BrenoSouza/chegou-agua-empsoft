import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  socket;

  constructor(private chat: ChatService) {
    this.socket = io();

  }

  ngOnInit() {
  }

}
