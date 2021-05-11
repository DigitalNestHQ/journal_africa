
import axios from "axios";
import { useEffect, useState } from "react";
import {REACT_APP_WEATHER_KEY} from "../../config";
import './weather.css';

import React from 'react'

export const Weather = () => {
  const [userWeather, setUserWeather] = useState(null)
  useEffect(() => {
    // weatherInit()
    if(localStorage.getItem('location-allowed')) {
      weatherInit();
    } else {
      return;
    }
  }, [])
  // console.log(userWeather)

  if(!localStorage.getItem('location-allowed')){ // if there is no permission
    return (
      <span onClick={()=>weatherInit()} className="weather-btn">show weather</span>
    )
  }
  function weatherInit(){
      // get user location weather data 
      const success = (position) => {
        // store permission to localstorage
        localStorage.setItem('location-allowed', true);
        getWeatherData(position.coords.latitude, position.coords.longitude)
      }
      // return when error occur
      const error = () => {
        alert('Unable to retrieve location.');
      }
      
      // check if the browser supports geolocation
      if (navigator.geolocation) {
       return navigator.geolocation.getCurrentPosition(success, error);
      } else {
        alert('Your browser does not support location tracking, or permission is denied.');
      }
  
    }
  
  async function getWeatherData (latitude, longitude){
    // console.log(latitude, longitude)
      // const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=9.0797&lon=6.0097&units=metric&appid=${REACT_APP_WEATHER_KEY}`;
      const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${REACT_APP_WEATHER_KEY}`;
      try {
          const weatherResult = await axios.get(weatherApi)
          setUserWeather(weatherResult.data)
      } catch (error) {
          console.log(error)
      }
    }

    if(!userWeather){ // if there is no weather result for the user, return nothing
      return null
    }
    const { main, name, weather } = userWeather;
  return (
    <>
      <span className="weather-text"> <span className="d-none d-md-inline d-lg-inline weather-text">weather:</span> {name} : {main.temp}° <sup>
        <img loading="lazy" 
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='weather icon'
            className='weather-icon d- d-lg-inline'
            style={{
              width: '10%',
              height: 'auto',
            }}
          />
        </sup>
      </span>
    </>
  )
}


