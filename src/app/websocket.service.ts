import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {

  private socket;

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io('http://localhost:3000');

    const observable = new Observable(observer => {
      this.socket.on('notificacao', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    const observer = {
      next: (data: object) => {
        this.socket.emit('message', JSON.stringify(data));
      }
    };

    return Rx.Subject.create(observer, observable);
  }
}
