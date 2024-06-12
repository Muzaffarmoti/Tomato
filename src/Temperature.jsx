import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'; // Import Header component

const Temperature = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const options = {
                method: 'GET',
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
                params: {
                    lon: '77.1173',
                    lat: '13.3379',
                    lang: 'en'
                },
                headers: {
                    'X-RapidAPI-Key': 'eae6bb4d77msh70deaa333b74bd7p1e4d0bjsn699008b44c04',
                    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div>
            <Header /> {/* Render the Header component */}
            <h1>Weather Information</h1>
            {weatherData ? (
                <div>
                    <p>City: {weatherData.data[0].city_name}</p>
                    <p>Temperature: {weatherData.data[0].temp}°C</p>
                    <p>Description: {weatherData.data[0].weather.description}</p>
                    <p>Wind Speed: {weatherData.data[0].wind_spd} m/s</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Temperature;
