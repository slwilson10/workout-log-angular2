import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { WorkoutModel } from '../store/workout-store';

@Injectable()
export class WorkoutService {
  static ENDPOINT: string = '/api/workout/:id';
  workouts: Observable<Array<WorkoutModel>>;

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Observable<Array<WorkoutModel>> {
    return this._http
               .get(WorkoutService.ENDPOINT.replace(':id', ''))
               .map((r) => r.json());
  }

  create(workout: WorkoutModel):Observable<WorkoutModel> {
    let _messageStringified = JSON.stringify(workout);

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(WorkoutService.ENDPOINT.replace(':id', ''), _messageStringified, {headers})
               .map((r) => r.json());
  }

  update(workout: WorkoutModel):Observable<WorkoutModel> {
    let _workoutString = JSON.stringify(workout);
    let id;
    Object.keys(workout).forEach(function(key, keyIndex) {
      if (key === "id"){
        id = workout[key];
      }
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http
               .put(WorkoutService.ENDPOINT.replace(':id', id), _workoutString, {headers})
               .map((r) => r.json());
  }

  delete(id: string):Observable<any> {
    return this._http
               .delete(WorkoutService.ENDPOINT.replace(':id', id));
  }
}
