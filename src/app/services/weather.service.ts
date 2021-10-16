import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '1d4e361a1a44095a2e8e9c53049c4b45';
  URI: string = '';



  constructor( private httpClient: HttpClient ) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?APPID=${this.apiKey}&units=metric&q=`
   }

  getWeather(cityName: string, countryCode: string){
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);
  } 
}
