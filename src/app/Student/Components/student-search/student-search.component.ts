import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from '../../../Models/student';
import {Observable} from 'rxjs/Observable';
import {StudentService} from '../../../Services/student.service';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {FileService} from '../../../Services/file.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  searchResults$: Observable<Student[]>;
  private _searchName = new Subject<string>();
  @ViewChild('fileInput') fileInput;
  @ViewChild('downloadId') downloadId;

  constructor(private _studentService: StudentService,
              private _fileService: FileService) { }

  search(name: string): void {
    this._searchName.next(name);
  }

  uploadFile(): void {
    let input = this.fileInput.nativeElement;
    this._fileService.uploadFile(input.files).subscribe(data => console.log('success'));
  }

  downloadFile(id: string): void {
    this._fileService.downloadFile(id).subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.searchResults$ = this._searchName.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._studentService.searchStudents(term))
    );
  }

}
