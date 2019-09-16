import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kolkata-forecast',
  templateUrl: './kolkata-forecast.component.html',
  styleUrls: ['./kolkata-forecast.component.css']
})
export class KolkataForecastComponent implements OnInit {
  @Input() kolkatas;

  constructor() { }

  ngOnInit() {
  }

}
