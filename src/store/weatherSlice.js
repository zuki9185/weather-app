import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	weatherData: null,
	error: null,
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setWeatherData: (state, action) => {
			state.weatherData = action.payload;
			state.error = null;
		},
		setError: (state, action) => {
			state.weatherData = null;
			state.error = action.payload;
		},
	},
});

export const { setWeatherData, setError } = weatherSlice.actions;

export const fetchWeatherData = city => async dispatch => {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
		);

		dispatch(setWeatherData(response.data));
	} catch (error) {
		console.error('City not found or API request failed.');
		dispatch(setError(error.message));
	}
};

export default weatherSlice.reducer;
