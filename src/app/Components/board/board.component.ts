import { Component, OnInit } from '@angular/core';
import { Board } from '../../Models/board';
import { BoardService } from '../../Services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardList: Board[];
  latestBoards: Board[];

  constructor(private _boardService: BoardService) { }

  ngOnInit() {
    this._boardService.getBoards().subscribe(data => {
      this.boardList = data['boards'];
    });
    this._boardService.getLatestBoards(5).subscribe(data => {
      this.latestBoards = data['boards'];
    });
  }


}
