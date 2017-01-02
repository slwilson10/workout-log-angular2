import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { WorkoutLog }   from './workout/components/workout-log';
import { WorkoutService }   from './workout/services/workout-service';

import { NavBar } from './workout/components/nav-bar';
import { DatePicker } from './workout/components/date-picker';
import { WorkoutChart } from './workout/components/workout-chart';
import { WorkoutCreator } from './workout/components/workout-creator';
import { WorkoutPicker } from './workout/components/workout-picker';
import { WorkoutEditor } from './workout/components/workout-editor';
import { WorkoutHistory } from './workout/components/workout-history';
import { WorkoutRow } from './workout/components/workout-row';
import { Workout } from './workout/components/workout';

import { OrderBy } from './workout/pipes/orderBy';


@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      MaterialModule.forRoot()
    ],
   declarations: [
      WorkoutLog,
      NavBar,
      DatePicker,
      WorkoutChart,
      WorkoutCreator,
      WorkoutPicker,
      WorkoutEditor,
      WorkoutHistory,
      WorkoutRow,
      Workout,
      OrderBy
    ],
    providers: [
      WorkoutService,
    ],
    bootstrap: [
      WorkoutLog,
    ],
})
export class AppModule {}
