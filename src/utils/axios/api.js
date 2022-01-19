import axios from './axios'

export function getWeather(params) {
	return axios({
		url: `/he/freeweather?city=${params.city}&appkey=${params.appkey}`,
		method: 'get',
	})
}




