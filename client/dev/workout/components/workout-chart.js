"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var moment = require("moment");
var WorkoutChart = (function () {
    function WorkoutChart(element) {
        this.element = element;
        this._element = this.element.nativeElement;
    }
    WorkoutChart.prototype.ngOnInit = function () {
        google.charts.load('current', { 'packages': ['bar'] });
    };
    WorkoutChart.prototype.formatData = function (dateRange, dataType, chartData) {
        var dataArray = [];
        var startDate = moment(dateRange.startDate);
        var endDate = moment(dateRange.endDate);
        var daysInRange = endDate.diff(startDate, 'days');
        function setDataType(data, type) {
            if (type == 'duration') {
                data = moment.duration({
                    minutes: data.duration[0].minutes, hours: data.duration[0].hours
                }).asMinutes();
                return data;
            }
            else {
                return data[type];
            }
        }
        if (daysInRange <= 8) {
            var rangeDatesArray = [];
            var date = moment(startDate).format('YYYY-MM-DD');
            for (var i = 0; i < daysInRange; i++) {
                rangeDatesArray.push(date);
                date = moment(date).add(1, 'days').format('YYYY-MM-DD');
            }
            for (var d in rangeDatesArray) {
                var found = false;
                for (var w in chartData) {
                    if (rangeDatesArray[d] == moment(chartData[w].date).format('YYYY-MM-DD')) {
                        dataArray.push([moment(chartData[w].date)
                                .format('MM/DD/YYYY'), setDataType(chartData[w], dataType)]);
                        found = true;
                    }
                }
                if (found == false) {
                    dataArray.push([moment(rangeDatesArray[d])
                            .format('MM/DD/YYYY'), 0]);
                }
            }
        }
        else {
            for (var w in chartData) {
                dataArray.push([moment(chartData[w].date)
                        .format('MM/DD/YYYY'), setDataType(chartData[w], dataType)]);
            }
        }
        return dataArray;
    };
    WorkoutChart.prototype.getHTextLength = function (data) {
        var hTextLength = 1;
        if (data.length < 9) {
            hTextLength = 1;
        }
        else if (data.length > 9 && data.length < 32) {
            hTextLength = 4;
        }
        else {
            hTextLength = 10;
        }
        return hTextLength;
    };
    WorkoutChart.prototype.getBarColor = function (dataType) {
        var color = 'blue';
        if (dataType == 'heartrate') {
            color = 'yellow';
        }
        else if (dataType == 'duration') {
            color = 'orange';
        }
        return color;
    };
    WorkoutChart.prototype.drawChart = function (dateRange, dataType, data) {
        var _data = new google.visualization.DataTable();
        _data.addColumn('string', 'Date');
        _data.addColumn('number', 'Calories');
        _data.addRows(this.formatData(dateRange, dataType, data));
        _data.sort({ column: 0 });
        var options = {
            title: "",
            width: 900,
            height: 400,
            legend: { position: "none" },
            chartArea: { 'width': '80%', 'height': '80%' },
            hAxis: {
                showTextEvery: this.getHTextLength(data),
            },
            colors: [this.getBarColor(dataType)],
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('workout-chart'));
        chart.draw(_data, options);
    };
    ;
    WorkoutChart.prototype.drawGraph = function (dateRange, dataType, data) {
        google.charts.setOnLoadCallback(this.drawChart(dateRange, dataType, data));
    };
    return WorkoutChart;
}());
__decorate([
    core_1.Input('dateRange'),
    __metadata("design:type", Object)
], WorkoutChart.prototype, "dateRange", void 0);
__decorate([
    core_1.Input('chartType'),
    __metadata("design:type", String)
], WorkoutChart.prototype, "chartType", void 0);
__decorate([
    core_1.Input('chartOptions'),
    __metadata("design:type", Object)
], WorkoutChart.prototype, "chartOptions", void 0);
__decorate([
    core_1.Input('chartData'),
    __metadata("design:type", Object)
], WorkoutChart.prototype, "chartData", void 0);
WorkoutChart = __decorate([
    core_1.Directive({
        selector: 'workout-chart'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], WorkoutChart);
exports.WorkoutChart = WorkoutChart;
//# sourceMappingURL=workout-chart.js.map