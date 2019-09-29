import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';
import { WeatherCardsComponent } from './Components/landing/weather-cards/weather-cards.component';
import { KolkataForecastComponent } from './Components/landing/kolkata-forecast/kolkata-forecast.component';
import { CityWeathersComponent } from './Components/landing/city-weathers/city-weathers.component';
import { ClimateCards2Component } from './Components/landing/climate-cards2/climate-cards2.component';
import { AgmCoreModule } from '@agm/core';
import { CommonNewsComponent } from './Components/common-news/common-news.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NearbyClimateComponent } from './Components/landing/nearby-climate/nearby-climate.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WeatherCardsComponent,
    KolkataForecastComponent,
    CityWeathersComponent,
    ClimateCards2Component,
    CommonNewsComponent,
    FooterComponent,
    NearbyClimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6RE0-laounX4BuNHmk1FwOtBK4QmMhG4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
