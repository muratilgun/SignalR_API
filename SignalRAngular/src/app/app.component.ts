import { CovidService } from './Services/covid.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';  
import { GoogleChartComponent } from 'angular-google-charts';  
import { ChartType, Row } from "angular-google-charts";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SignalRAngular';
  type = ChartType.LineChart;  
  
  columnNames = ["Tarih", "İstanbul","Ankara","İzmir","Konya","Antalya"];
  options: any = {legend: {position:"Bottom"}};
  constructor(public covidService:CovidService){}
  ngOnInit(): void {
    this.covidService.startConnection();
    this.covidService.startListener();
  }


}
