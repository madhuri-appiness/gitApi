import { Component } from '@angular/core';
import * as data from './data.json';
import { AmChart, AmChartsService } from '@amcharts/amcharts3-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private chart2: any;
  title = 'app';
  jsonArr:any = [];

 obj = (<any>data).calls;
 constructor(private AmCharts: AmChartsService) { }
 ngOnInit() {
   console.log(this.obj);
   Object.entries(this.obj).forEach(([key,value])=>{
    this.jsonArr.push({
      'name':key,
      'value':value
    })
   })
   console.log(this.jsonArr);
   this.generateChart();
   sessionStorage.setItem('token', '8e98b189caf79facfdc7c7fb47b6aec7b4996729');

   console.log(sessionStorage.getItem('token'))
}


generateChart = () => {
  this.chart2 = this.AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataDateFormat": "YYYY-MM-DD",
  "applyGapValue": 0,
  "graphs": [{
  "id": "g1",
  "bullet": "round",
  "bulletBorderAlpha": 1,
  "bulletColor": "#FFFFFF",
  "bulletSize": 5,
  "hideBulletsCount": 50,
  "lineThickness": 2,
  "title": "red line",
  "useLineColorForBulletBorder": true,
  "valueField": "value",
  "balloonText": "<span style='font-size:18px;'>[[value]]</span> USD",
  "fillAlphas": 0.6,
  "lineColor": 'blue',
  }],
  "chartScrollbar": {
  "enabled": false
  },
  "chartCursor": {
  "cursorAlpha": 0
  },
  "categoryField": "name",
  "categoryAxis": {
  "parseDates": true,
  "dashLength": 1,
  "equalSpacing": true,
  "minorGridEnabled": true,

  },
  'dataProvider': this.jsonArr
  });
 
}

}
