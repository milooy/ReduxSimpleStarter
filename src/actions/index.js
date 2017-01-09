import axios from 'axios'

const API_KEY = '5d7f92e438ba10377e26f0e88767f708'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER' // 액션 타입 담는 변수. 따로 빼는게 컨벤션. 아래에 string으로 바로 관리하면 리팩토링 등 힘듦

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
