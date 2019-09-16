import { Component } from '@angular/core';

declare var loGo: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myAlert = function(){
    alert("Hello!");
  };
  onClick(){
    this.myAlert();
  };
}
