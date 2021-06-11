/* Component에서 변수를 호출하면 state의 변수를 전달한다. */
export default {
	GET_DAILY(state) {
		return state.daily;
	},
	GET_DAYS(state) {
		return state.days;
	},
}