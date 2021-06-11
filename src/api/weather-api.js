import axios from 'axios'

const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const ICON_SRC = 'http://openweathermap.org/img/wn/'
const params = { units: 'metric', appid: '02efdd64bdc14b279bc91d9247db4722' }

const getWeather = async () => {
	await axios.get()
}