/* 실제 값을 가져와서 mutation에 등록된 함수를 실행한다 => mutation.state값이 변화됨 */
import getCoords from '../api/coords-api'

export default {
	ACT_CITY({ commit }, v) {
		commit('MUT_CITY', v)
	},
	ACT_DAILY({ commit }, v) {
		commit('MUT_DAILY', v)
	},
	ACT_DAYS({ commit }, v) {
		commit('MUT_DAYS', v)
	},
	async ACT_COORDS({ commit }, v) {
		try {
			const coords = await getCoords()
			commit('MUT_COORDS', coords)	
		}
		catch(err) {
			console.log(err)
		}
	}
}