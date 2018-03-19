import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CrudServiceService {

  private url = 'https://chegou-agua.herokuapp.com/historico';

  constructor(private http: Http) { }

  getHistorico() {
    return this.http.get(this.url).map((response: Response) => response.json());
  }

}
