import axios from 'axios';

const API_KEY = '5072591a6f81da55686d7fc6db5ccb35';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const URL = `${ROOT_URL}&q=${city},IN`;
	const request = axios.get(URL);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}