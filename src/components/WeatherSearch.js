'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../store/weatherSlice';
// import axios from 'axios';

const WeatherSearch = () => {
	const dispatch = useDispatch();
	const [city, setCity] = useState('');

	const handleInputChange = event => {
		setCity(event.target.value);
	};

	const handleSubmit = async event => {
		event.preventDefault();
		dispatch(fetchWeatherData(city));
	};

	return (
		<div className='container'>
			<form className='form' onSubmit={handleSubmit}>
				<input
					className='input'
					type='text'
					placeholder='Enter City Name'
					value={city}
					onChange={handleInputChange}
				/>
				<button className='button' type='submit'>
					Search
				</button>
			</form>
		</div>
	);
};

export default WeatherSearch;
