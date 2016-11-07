import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from '@angular/http';

import 'rxjs/add/operator/map';

import { NoteModel } from '../store/note-store';

@Injectable()
export class NoteService {
  static ENDPOINT: string = '/api/note/:id';
  notes: Observable<Array<NoteModel>>;

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Observable<Array<NoteModel>> {
    return this._http
               .get(NoteService.ENDPOINT.replace(':id', ''))
               .map((r) => r.json());
  }

  add(note: NoteModel):Observable<NoteModel> {
    let _messageStringified = JSON.stringify(note);

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(NoteService.ENDPOINT.replace(':id', ''), _messageStringified, {headers})
               .map((r) => r.json());
  }

  remove(id: string):Observable<any> {
    return this._http
               .delete(NoteService.ENDPOINT.replace(':id', id));
  }
}
