import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../Models/board';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BoardService {

  API_URL = 'http://localhost:53304/api/Board/';

  constructor(private _http: HttpClient) { }

  getBoards() {
    return this._http.get<Board[]>(this.API_URL);
  }

  getLatestBoards(num: number) {
    return this._http.get<Board[]>(this.API_URL + num);
  }

  searchBoards(term: string) {
    if (!term.trim()) {
      return of([]);
    }
    return this._http.get<Board[]>(this.API_URL + `Search?name=${term}`);
  }
}
