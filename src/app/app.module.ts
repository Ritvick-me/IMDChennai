import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';
import { WeatherCardsComponent } from './Components/landing/weather-cards/weather-cards.component';
import { KolkataForecastComponent } from './Components/landing/kolkata-forecast/kolkata-forecast.component';
import { CityWeathersComponent } from './Components/landing/city-weathers/city-weathers.component';
import { ClimateCards2Component } from './Components/landing/climate-cards2/climate-cards2.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WeatherCardsComponent,
    KolkataForecastComponent,
    CityWeathersComponent,
    ClimateCards2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
