import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private socketService: ChatService) { }

  public data = {};

  ngOnInit() {
    this.socketService.messages.subscribe(data => {
      this.data = data;
    });
  }

}
