import { Component, OnInit } from '@angular/core';
import { Board } from '../../Models/board';
import { BoardService } from '../../Services/board.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardList: Board[];
  latestBoards: Board[];
  searchResults$: Observable<Board[]>;
  private _searchTerms = new Subject<string>();

  constructor(private _boardService: BoardService) { }

  search(term: string): void {
    this._searchTerms.next(term);
  }

  ngOnInit() {
    this._boardService.getLatestBoards(5).subscribe(data => {
      this.latestBoards = data['boards'];
    });
    this.searchResults$ = this._searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._boardService.searchBoards(term))
    );
  }



}
