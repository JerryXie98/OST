import { Component, OnInit } from '@angular/core';
import {Student} from '../../../Models/student';
import {Observable} from 'rxjs/Observable';
import {StudentService} from '../../../Services/student.service';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  searchResults$: Observable<Student[]>;
  private _searchName = new Subject<string>();

  constructor(private _studentService: StudentService) { }

  search(name: string): void {
    this._searchName.next(name);
  }

  ngOnInit() {
    this.searchResults$ = this._searchName.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._studentService.searchStudents(term))
    );
  }

}
