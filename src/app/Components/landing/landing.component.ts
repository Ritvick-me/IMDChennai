import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  lat: number = 12.820510;
  lng: number = 80.044028;

  weathers = [
    { image: "../../../assets/caz_kol.gif", head: "MAX(Z)", x: "s" },
    { image: "../../../assets/3Dasiasec_ir2.jpg", head: "Satellite Picture Asia Sector IR-2", x: "p" },
  ];

  tethers = [
    { image: "../../../assets/3Dasiasec_wv.jpg", head: "Satellite Picture Asia Sector Water Vapor", x: "a" },
    { image: "../../../assets/weekly_dep.png", head: "Weekly Rainfall Distribution For West Bengal", x: "b" },
    { image: "../../../assets/seasonal_dep.png", head: "Seasonal Rainfall Distribution For West Bengal", x: "c" },
  ];

  kolkatas = [
    { 
      heading: "Forecast For Chennai & neighbourhood <> 14-09-2019 evening",
      description: "Partly cloudy sky. Rasin or thundershower likely in some area. Maximum and minimum temperature most likely to be around 34 °C and 27 °C respectively.",
      max: "33.9",
      min: "27.0",
      RHmax: "94",
      RHmin: "61",
      RF24: "000.3",
      RFz: "000.2"
    }
  ]

  cities = [
    {
      city: "Chennai",
      date: "14-09-2019 17:30 IST",
      location: "Lat: 22°31' N / Lon: 88°19' E / Altitude: 6.0 m",
      weather: "Partly Cloudy",
      temp: "31",
      humid: "78%",
      cloud: "50%",
      visibility: "4.0 Km",
      ppt: "0.2 mm",
      wind: "7.4 kmph from SW",
      MSL: "1001.9 hPa"
    },
    {
      city: "Bhubaneshwar",
      date: "14-09-2019 20:30 IST",
      location: "Lat: 20°15' N / Lon: 85°49' E / Altitude: 45.0 m",
      weather: "Partly Cloudy",
      temp: "31",
      humid: "78%",
      cloud: "50%",
      visibility: "4.0 Km",
      ppt: "0.2 mm",
      wind: "7.4 kmph from SW",
      MSL: "1001.9 hPa"
    },
    {
      city: "Ranchi",
      date: "14-09-2019 20:30 IST",
      location: "Lat: 25°36' N / Lon: 85°10' E / Altitude: 51.0 m",
      weather: "Partly Cloudy",
      temp: "31",
      humid: "78%",
      cloud: "50%",
      visibility: "4.0 Km",
      ppt: "0.2 mm",
      wind: "7.4 kmph from SW",
      MSL: "1001.9 hPa"
    },
    {
      city: "Coimbatore",
      date: "14-09-2019 17:30 IST",
      location: "Lat: 22°31' N / Lon: 88°19' E / Altitude: 6.0 m",
      weather: "Partly Cloudy",
      temp: "31",
      humid: "78%",
      cloud: "50%",
      visibility: "4.0 Km",
      ppt: "0.2 mm",
      wind: "7.4 kmph from SW",
      MSL: "1001.9 hPa"
    },
    {
      city: "Pondicherry",
      date: "14-09-2019 20:30 IST",
      location: "Lat: 20°15' N / Lon: 85°49' E / Altitude: 45.0 m",
      weather: "Partly Cloudy",
      temp: "31",
      humid: "78%",
      cloud: "50%",
      visibility: "4.0 Km",
      ppt: "0.2 mm",
      wind: "7.4 kmph from SW",
      MSL: "1001.9 hPa"
    },
    {
      city: "Port Blair",
      date: "14-09-2019 20:30 IST",
      location: "Lat: 25°36' N / Lon: 85°10' E / Altitude: 51.0 m",
      weather: "Partly Cloudy",
      temp: "31",
      humid: "78%",
      cloud: "50%",
      visibility: "4.0 Km",
      ppt: "0.2 mm",
      wind: "7.4 kmph from SW",
      MSL: "1001.9 hPa"
    }
  ]
  
  myAlert = function(){
    alert("Hello!");
  };
  constructor() { }

  ngOnInit() {
    // console.log(this.weathers.image);
  }

}
