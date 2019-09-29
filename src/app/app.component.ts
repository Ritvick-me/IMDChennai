import { Component } from '@angular/core';
import * as $ from "jquery";

declare var loGo: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  news = [
    {
      head: "Agromet Services",
      content: "Forecasts and advisories for farmers issued by Agricultural Meteorology Division of IMD",
      image: "../../../assets/agromet.jpg"
    },
    {
      head: "Farmer's Portal",
      content: "One stop shop for meeting all informational needs relating to Agriculture, Animal Husbandry and Fisheries sectors production, sale and storage of an Indian farmer.",
      image: "../../../assets/farm.jpg"
    },
    {
      head: "Radars",
      content: "Doppler Radar products of India Meteorological Department from all over India.",
      image: "../../../assets/radom.jpg"
    },
    {
      head: "Satellite Meteorology",
      content: "Satellite Meteorology division of India Meteorological Department.",
      image: "../../../assets/satmet.jpg"
    },
    {
      head: "RSMC",
      content: "Regional Specialized Meteorological Centre for Tropical Cyclone over North Indian Ocean is responsible for co-ordination and issue of Tropical Weather Outlooks and Tropical Cyclone Advisories for the countries in the WMO/ESCAP Panel region bordering the Bay of Bengal and the Arabian Sea.",
      image: "../../../assets/philin.jpg"
    },
    {
      head: "NWP",
      content: "The Numerical Weather Prediction Division of IMD run mathematical models.",
      image: "../../../assets/nwp.jpg"
    },
    {
      head: "Seismology",
      content: "Centre for Seismology, IMD under Ministry of Earth Sciences is nodal agency of Government of India dealing with various activities in the field of seismology and allied disciplines.",
      image: "../../../assets/seismogram.jpg"
    },
    {
      head: "Positional Astronomy",
      content: "The Positional Astronomy Centre is the nodal office of the Govt. of India who has got the responsibility to prepare the data on positional astronomy for scientific purposes and national calendar for civic and religious purposes.",
      image: "../../../assets/positionalastronomy.jpg"
    }
  ]

  
  hello = $(function () {
    $(document).scroll(function () {
      var $nav = $(".pos-f-t");
      $nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height()*1.9);
    });
  });
}

export class AppModule {}