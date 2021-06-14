/* Component에서 변수를 호출하면 state의 변수를 전달한다. */
export default {
	GET_DAILY: function(state) {
		return state.daily
	},
	GET_DAYS: function(state) {
		return state.days
	},
}