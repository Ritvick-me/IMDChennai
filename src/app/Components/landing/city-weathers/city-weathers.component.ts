import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-weathers',
  templateUrl: './city-weathers.component.html',
  styleUrls: ['./city-weathers.component.css']
})
export class CityWeathersComponent implements OnInit {
  @Input() cities;

  constructor() { }

  ngOnInit() {
  }

}
