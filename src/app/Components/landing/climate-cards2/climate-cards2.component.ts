import { Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-climate-cards2',
  templateUrl: './climate-cards2.component.html',
  styleUrls: ['./climate-cards2.component.css']
})
export class ClimateCards2Component implements OnInit {

  @Input() tethers;

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#modButa").click(function(){
        $("#moldala").addClass("show");
      });
      $("#modButb").click(function(){
        $("#moldalb").addClass("show");
      });
      $("#modButc").click(function(){
        $("#moldalc").addClass("show");
      });
      $(".butClosea").click(function(){
        $("#moldala").removeClass("show");
      });
      $(".butCloseb").click(function(){
        $("#moldalb").removeClass("show");
      });
      $(".butClosec").click(function(){
        $("#moldalc").removeClass("show");
      });
    });
  }

}
