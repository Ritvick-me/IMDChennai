import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nearby-climate',
  templateUrl: './nearby-climate.component.html',
  styleUrls: ['./nearby-climate.component.css']
})
export class NearbyClimateComponent implements OnInit {

  @Input() places;
  constructor() { }

  ngOnInit() {
  }

}
