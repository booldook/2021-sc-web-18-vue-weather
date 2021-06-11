/* Component에서 변수를 호출하면 state의 변수를 전달한다. */
export default {
	GET_CITY(state) {
		return state.selectedCity;
	},
	GET_DAILY(state) {
		return state.daily;
	},
	GET_DAYS(state) {
		return state.days;
	},
	GET_COORDS(state) {
		console.log(state.coords)
		return state.coords;
	},
}