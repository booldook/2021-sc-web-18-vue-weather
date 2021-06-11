import axios from 'axios'
import getCoords from './coords-api'

const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const ICON_SRC = 'http://openweathermap.org/img/wn/'
const PARAMS = { units: 'metric', appid: '02efdd64bdc14b279bc91d9247db4722' }

//https://api.openweathermap.org/data/2.5/weather?units=metric&appid=02efdd64bdc14b279bc91d9247db4722&lat=37.5605672&lon=126.94334859999998

/* 
v = {
	lat: 37.000,
	lon: 127.000
}
axios return {..., data: 실제 데이터}

const r = await axios.get('주소', { params: { lat: 37, lon: 127 ... } })
*/

export default async (url, v) => {
	try {
		const params = v ? { ...PARAMS, ...v } : { ...PARAMS, ...await getCoords() }
		const { data } = await axios.get(url === 'daily' ? DAILY_URL : DAYS_URL, { params })
		return data
	}
	catch(err) {
		console.log(err)
	}
}
