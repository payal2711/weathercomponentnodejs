import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  @Input() weatherData: any;
}
<div class="weather-container">
  <h2>Weather in {{ weatherData.name }}</h2>
  <p><strong>Temperature:</strong> {{ weatherData.main.temp }}°C</p>
  <p><strong>Weather:</strong> {{ weatherData.weather[0].description | titlecase }}</p>
  <p><strong>Humidity:</strong> {{ weatherData.main.humidity }}%</p>
  <p><strong>Wind Speed:</strong> {{ weatherData.wind.speed }} m/s</p>
  <img [src]="'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png'" alt="Weather Icon">
</div>
