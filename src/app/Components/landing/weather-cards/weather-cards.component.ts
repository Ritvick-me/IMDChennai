import { Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: ['./weather-cards.component.css']
})
export class WeatherCardsComponent implements OnInit {
  @Input() weathers;
  @Input() id;


  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#modButp").click(function(){
        $("#moldalp").addClass("show");
      });
      $("#modButs").click(function(){
        $("#moldals").addClass("show");
      });
      $(".butCloses").click(function(){
        $("#moldals").removeClass("show");
      });
      $(".butClosep").click(function(){
        $("#moldalp").removeClass("show");
      });
    });
  }

}
