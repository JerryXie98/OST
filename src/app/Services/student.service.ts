import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {Student} from '../Models/student';

@Injectable()
export class StudentService {

  API_URL = 'http://localhost:53304/api/Student/';

  constructor(private _http: HttpClient) { }

  searchStudents(name: string) {
    if (!name.trim()) {
      return of([]);
    }
    this._http.get<Student[]>(this.API_URL + `Search?name=${name}`).subscribe(data => {
      console.log(data);
    });
    return this._http.get<Student[]>(this.API_URL + `Search?name=${name}`);
  }
}
