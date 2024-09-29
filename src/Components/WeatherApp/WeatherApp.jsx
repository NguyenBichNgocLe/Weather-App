import React, { useRef, useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import mist_icon from '../Assets/mist.png';
import thunderstorm_icon from '../Assets/thunderstorm.png';

const WeatherApp = () => {

    const api_key = "d3f61e268077d0365cac0ff5b228879b";

    const [wicon, setWicon] = useState(cloud_icon);
    const [temperature, setTemperature] = useState("24°C");
    const [location, setLocation] = useState("London");
    const [humidity, setHumidity] = useState("64%");
    const [windSpeed, setWindSpeed] = useState("18 km/h");

    const cityInputRef = useRef(null);

    const search = async () => {
        const city = cityInputRef.current.value;
        if(city === "") {
            alert("Please enter a city name");
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;

        try {
            let response = await fetch(url);
            let data = await response.json();

            if(response.status === 404) {
                alert("City not found. Please enter a valid city name.");
                return;
            }

            setHumidity(data.main.humidity + " %");
            setWindSpeed(Math.floor(data.wind.speed) + " km/h");
            setTemperature(Math.floor(data.main.temp) + "°C");
            setLocation(data.name);

            const weatherIcon = data.weather[0].icon;
            switch(weatherIcon) {
                case "01d":
                case "01n":
                    setWicon(clear_icon);
                    break;
                case "02d":
                case "02n":
                case "03d":
                case "03n":
                case "04d":
                case "04n":
                    setWicon(cloud_icon);
                    break;
                case "09d":
                case "09n":
                    setWicon(drizzle_icon)
                    break;
                case "10d":
                case "10n":
                    setWicon(rain_icon);
                    break;
                case "11d":
                case "11n":
                    setWicon(thunderstorm_icon);
                    break; 
                case "13d":
                case "13n":
                    setWicon(snow_icon);
                    break; 
                case "50d":
                case "50n":
                    setWicon(mist_icon);
                    break;
                default:
                    setWicon(clear_icon);            
            }
        } catch (error) {
            console.error("Error fetching weather data: ", error);
            alert("Unable to retrieve weather data. Please try again!");
        }
    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='Search' ref={cityInputRef} onKeyDown={(e) => {
                if(e.key === 'Enter') search();
            }}/>
            <div className='search-icon' onClick={()=>{ search() }}>
                <img src={search_icon} alt='' />
            </div>
        </div>
        <div className='weather-image'>
            <img src={wicon} alt='' />
        </div>
        <div className='weather-temp'>{temperature}</div>
        <div className='weather-location'>{location}</div>
        <div className='data-container'>
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">{humidity}</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">{windSpeed}</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp
