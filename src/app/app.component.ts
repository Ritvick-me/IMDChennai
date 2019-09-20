import { Component } from '@angular/core';
import * as $ from "jquery";

declare var loGo: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello = $(function () {
    $(document).scroll(function () {
      var $nav = $(".pos-f-t");
      $nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height()*1.9);
    });
  });
}

export class AppModule {}