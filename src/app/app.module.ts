import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherMainComponent } from './Components/weather-main/weather-main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({
        enabled: location.search.includes('sw=true')
      })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
