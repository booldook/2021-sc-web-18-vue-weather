<template>
	<div class="daily-wrapper">
		<h2 class="title-wrap">
			날씨정보 <span>{{ cityName }}</span>
		</h2>
		<b-form-select class="city-select" v-model="selected" :options="options" size="lg" />
		<div>
			<button class="btn btn-primary" @click="onClick">현재위치의 날씨 정보 확인</button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
	name: 'Daily',
	data() {
		// 현재 컴포넌트에서 쓰일 변수를 등록하는 곳
		return {
			city: [],
			selected: '',
		}
	},
	props: ['data'], // 부모가 전해준 변수
	computed: {
		// 다른 변수값이 변해서 내 값이 변하게 하려면 computed에 등록
		// 계산되어진 변수 -> 선언한 변수가 함수 안의 값이 변하면 자신도 변한다.
		options: function() { // 변수 선언: options라는 변수를 선언함
			const city = []
			this.city.forEach( (v, i) => {
				let isCity = v.lat && v.lon
				if(i == 0) city.push({ text: '날씨를 알고 싶은 도시를 선택하세요.', value: '', disabled: true })
				if(!isCity) city.push({ text: '-----------', value: '', disabled: true })
				city.push({
					text: v.name, value: { lat: v.lat, lon: v.lon }, disabled: isCity ? false : true 
				})
				if(!isCity) city.push({ text: '-----------', value: '', disabled: true })
			})
			return city
		},
		...mapGetters(['GET_DAILY']),
		cityName: function() {
			return this.GET_DAILY ? this.GET_DAILY.name : ''
		}
	},
	watch: {
		// 내가 변해서 다른 값들을 변하게 하려면 watch에 등록
		// 선언되어 있는 변수의 값이 바뀌면 함수를 실행한다.
		selected: function(v, ov) {
			// select의 값이 변하면 날씨정보를 요청하는 로직
			this.$store.dispatch('ACT_DAILY', v)
		},
		GET_DAILY: function(v, ov) {
			console.log(v)
		}
	},
	async created() {	// 자신이 실행될 때 한 번 실행한다.
		this.$store.dispatch('ACT_DAILY', null)	// 현재위치의 날씨정보를 가져와.
		const { data } = await axios.get('/json/city.json') // 도시정보를 가져와.
		this.city = data.city
	},
	methods: {
		onClick() {
			this.$store.dispatch('ACT_DAILY', null)
		},
	}
}
</script>

<style lang="scss" scoped>
	.daily-wrapper {
		text-align: center;
		h2.title-wrap {
			padding: 1em 0;
			font-size: 2em;
			text-align: center;
		}
		.city-select {
			width: 50%;
			margin: 1em auto;
		}
	}
</style>