import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit{
  city="";
  weatherData:any;
  weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  ngOnInit(): void {
  }

  constructor(
    private weatherService : WeatherService,
    private snackBar : MatSnackBar
    ){}

  getWeather(){
    this.weatherService.getWeather(this.city).subscribe((data:any)=>{
      this.weatherData=data;
      console.log("weather data check : "+this.weatherData)
    }, (errorRes: HttpErrorResponse) => {
      const errorMessage = errorRes.error || 'error fetching weather data for';
      console.log("error : ",errorMessage);
      this.snackBar.open(errorMessage+" "+this.city,'Close',{
        duration: 5000,
        panelClass: 'error-snackbar'
      });
      // Remove weather data on error
      this.weatherData = false;
    });
  }

  getFormattedDate(date:string){
    const inputDate = new Date(date);
    // const weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const dayOfWeek = inputDate.getDay();

    const dayOfMonth = inputDate.getDate().toString().padStart(2,'0');

    const formattedDate = `${this.weekDays[dayOfWeek]} ${dayOfMonth}`
    console.log(formattedDate);
    return formattedDate;
  }
  

}
