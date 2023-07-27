'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const WeatherInfo = () => {
	const { weatherData, error } = useSelector(state => state.weather);

	return weatherData ? (
		<div className='container-info'>
			<div className='weather-info'>
				<h2>{weatherData.name}</h2>
				<p>
					Temperature: {Math.floor(weatherData.main.temp - 273.15)}°C
				</p>
				<p>Weather: {weatherData.weather[0].description}</p>
				<img
					className='weather-icon'
					src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
					alt='Weather Icon'
				/>
			</div>
		</div>
	) : (
		error && <p className='error-message'>{error}</p>
	);
};

export default WeatherInfo;
