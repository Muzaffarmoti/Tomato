import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'; // Import Header component

const Temperature = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const CITY_NAME = 'London'; // Change to the city you want
  
    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
          );
          setWeatherData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchWeatherData();
    }, [API_KEY, CITY_NAME]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Weather in {weatherData.name}</h1>
        <p>Temperature: {weatherData.main.temp} °C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
      </div>
    );
       
};

export default Temperature;
