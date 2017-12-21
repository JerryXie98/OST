import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FileService {

  API_URL = 'http://localhost:53304/api/File/';

  constructor(private _http: HttpClient) { }

  uploadFile(files: any) {
    let input = new FormData();
    for (let file of files) {
      input.append('files', file);
    }
    return this._http.post(this.API_URL, input);
  }

  downloadFile(id: string) {
    window.open(this.API_URL + 'Download/' + id);
    return this._http.get(this.API_URL + 'Download/' + id);
  }

}
