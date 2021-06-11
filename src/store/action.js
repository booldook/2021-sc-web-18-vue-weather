/* 실제 값을 가져와서 mutation에 등록된 함수를 실행한다 => mutation.state값이 변화됨 */

export default {
	ACT_DAILY({ commit }, v) {
		commit('MUT_CITY', v)
	},
	ACT_DAILY({ commit }, v) {
		commit('MUT_DAILY', v)
	},
	ACT_DAYS({ commit }, v) {
		commit('MUT_DAYS', v)
	},
	ACT_COORDS({ commit }, v) {
		commit('MUT_COORDS', v)
	}
}