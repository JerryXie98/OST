import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../Models/board';

@Injectable()
export class BoardService {

  API_URL = 'http://localhost:53304/api/Board/';

  constructor(private _http: HttpClient) { }

  getBoards() {
    return this._http.get(this.API_URL);
  }

  getLatestBoards(num: number) {
    return this._http.get(this.API_URL + num);
  }

}
