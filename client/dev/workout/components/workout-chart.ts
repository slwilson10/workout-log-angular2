import {Directive,ElementRef,Input,OnInit} from '@angular/core';
import * as moment from 'moment';

import { WorkoutModel } from '../store/workout-store';

declare var google:any;
declare var googleLoaded:any;

@Directive({
  selector: 'workout-chart'
})

export class WorkoutChart implements OnInit {
  public _element:any;
  @Input('dateRange') public dateRange: Object;
  @Input('chartType') public chartType:string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;

  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }

  ngOnInit() {
    google.charts.load('current', {'packages':['bar']});
  }

  // Recieve data and format to fit chart requirements
  formatData(dateRange, dataType, chartData){
    let dataArray = [];
    let startDate = moment(dateRange.startDate);
    let endDate = moment(dateRange.endDate);
    let daysInRange = endDate.diff(startDate, 'days');

    // Return passed data type
    function setDataType(data, type) {
      // If type is duration, return as combined minutes
      if(type == 'duration'){
        data = moment.duration({
          minutes: data.duration[0].minutes,hours: data.duration[0].hours
        }).asMinutes()
        return data
      } else { return data[type] }
    }

    // Check if datRange is longer than a week
    if(daysInRange <= 8) {
      // Put all dates in range inside an array
      let rangeDatesArray = []
      let date = moment(startDate).format('YYYY-MM-DD');
      for (let i = 0; i < daysInRange; i++) {
        rangeDatesArray.push(date);
        date = moment(date).add(1, 'days').format('YYYY-MM-DD');
      }

      // Loop through array of dates in range
      for (let d in rangeDatesArray) {
        let found = false;  // Variable to keep track if match was found
        // Loop through workouts
        for (let w in chartData) {
          // Check if the current date and workout date match
          if (rangeDatesArray[d] == moment(chartData[w].date).format('YYYY-MM-DD')){
            // Add workout data to dataArray
            dataArray.push([moment(chartData[w].date)
              .format('MM/DD/YYYY'), setDataType(chartData[w], dataType)]);
            found = true;
          }
        }
        // Create blank entry for non matching dates
        if(found == false){
          dataArray.push([moment(rangeDatesArray[d])
            .format('MM/DD/YYYY'), 0]);
        }
      }
    }
    // If dateRange is longer than a week
    else {
      // Loop through workouts and add them into dataArray
      for (let w in chartData) {
        dataArray.push([moment(chartData[w].date)
          .format('MM/DD/YYYY'), setDataType(chartData[w], dataType)]);
      }
    }
    return dataArray;
  }

  // Set hAxis length based on number of workouts shown in chart
  getHTextLength(data) {
      let hTextLength = 1;
      if(data.length < 9){
          hTextLength = 1;
      }else if (data.length > 9 && data.length < 32){
          hTextLength = 4;
      }else{
          hTextLength = 10;
      }
      return hTextLength;
  }

  // Set chart bar color based on type of data
  getBarColor(dataType){
    let color = 'blue';
    if(dataType == 'heartrate'){
        color = 'yellow';
    }else if (dataType == 'duration'){
        color = 'orange';
    }
    return color;
  }

  // Set up chart for drawing
  drawChart(dateRange, dataType, data) {
    let _data = new google.visualization.DataTable();
    _data.addColumn('string', 'Date');
    _data.addColumn('number', 'Calories');
    _data.addRows(this.formatData(dateRange, dataType, data));
    _data.sort({column: 0});

    let options = {
      title: "",
      width: 900,
      height: 400,
      legend: { position: "none" },
      chartArea: {'width': '80%', 'height': '80%'},
      hAxis:{
        showTextEvery: this.getHTextLength(data),
      },
      colors:[this.getBarColor(dataType)],
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('workout-chart'));
    chart.draw(_data, options);
  };

  // Main chart drawing function
  drawGraph (dateRange, dataType, data) {
    google.charts.setOnLoadCallback(this.drawChart(dateRange, dataType, data));
  }
}
