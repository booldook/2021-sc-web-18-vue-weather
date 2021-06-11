/* 실제 값을 가져와서 mutation에 등록된 함수를 실행한다 => mutation.state값이 변화됨 */
import getWeather from '../api/weather-api'

export default {
	async ACT_DAILY({ commit }, v) {
		try {
			commit('MUT_DAILY', await getWeather('daily', v));
		}
		catch(err) {
			console.log(err)
		}
	},
	async ACT_DAYS({ commit }, v) {
		try {
			commit('MUT_DAYS', await getWeather('days', v));
		}
		catch(err) {
			console.log(err)
		}
	}
}