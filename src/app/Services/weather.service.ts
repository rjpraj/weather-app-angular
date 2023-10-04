import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const apiUrl = `http://host.docker.internal:8080/v1/weather/${city}`;
    console.log(city)
    return this.http.get(apiUrl);
    }
}
