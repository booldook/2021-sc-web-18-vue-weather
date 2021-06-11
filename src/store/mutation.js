/* state에 등록된 변수를 변화시킨다. */
export default {
	MUT_CITY(state, v) {
		state.selectedCity = v;
	},
	MUT_DAILY(state, v) {
		state.daily = v;
	},
	MUT_DAYS(state, v) {
		state.days = v;
	},
	MUT_COORDS(state, v) {
		state.coords = v;
	},
}