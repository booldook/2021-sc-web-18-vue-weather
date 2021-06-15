<template>
	<div class="daily-wrapper">
		<Title :cityName="cityName" />
		<Date :date="date" />
		<b-form-select class="city-select" v-model="selected" :options="options" size="lg" />
		<b-button variant="dark" @click="onClick">현재위치의 날씨 정보 확인</b-button>
		<div class="daily-wrap">
			<Icon class="icon-wrap" :icon="icon" />
			<Temp class="temp-wrap" :temp="temp" />
			<Description class="desc-wrap" :main="main" :description="description" />
			<Wind class="wind-wrap" :wind="wind" :key="GET_DAILY.dt" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

import Title from '../components/Title.vue'
import Icon from '../components/Icon.vue'
import Temp from '../components/Temp.vue'
import Date from '../components/Date.vue'
import Description from '../components/Desciption.vue'
import Wind from '../components/Wind.vue'

export default {
	name: 'Daily',
	components: { Title, Icon, Temp, Date, Description, Wind },
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
				if(i == 0) city.push({ text: '도시를 선택하세요.', value: '', disabled: true })
				if(!isCity) city.push({ text: '-----------', value: '', disabled: true })
				city.push({
					text: v.name, value: { lat: v.lat, lon: v.lon }, disabled: isCity ? false : true 
				})
				if(!isCity) city.push({ text: '-----------', value: '', disabled: true })
			})
			return city
		},
		...mapGetters(['GET_DAILY', 'GET_COORDS']),
		cityName: function() {
			// return this.GET_DAILY ? this.GET_DAILY.name : ''
			return this.getValue(this.GET_DAILY, 'name')
		},
		icon: function() {
			// return this.GET_DAILY && this.GET_DAILY.weather ? this.GET_DAILY.weather[0].icon : null
			return this.getValue(this.GET_DAILY, 'weather', 'icon')
		},
		temp: function() {
			return this.getValue(this.GET_DAILY, 'main', 'temp')
		},
		date: function() {
			return this.getValue(this.GET_DAILY, 'dt')
		},
		main: function() {
			return this.getValue(this.GET_DAILY, 'weather', 'main')
		},
		description: function() {
			return this.getValue(this.GET_DAILY, 'weather', 'description')
		},
		wind: function() {
			return {
				deg: this.getValue(this.GET_DAILY, 'wind', 'deg'),
				speed: this.getValue(this.GET_DAILY, 'wind', 'speed')
			}
		}
	},
	watch: {
		// 내가 변해서 다른 값들을 변하게 하려면 watch에 등록
		// 선언되어 있는 변수의 값이 바뀌면 함수를 실행한다.
		selected: function(v, ov) {
			this.dispatchWeather(v) 
		},
	},
	async created() {	// 자신이 실행될 때 한 번 실행한다.
		// console.log('created')
		// console.log(this.GET_COORDS)
		this.dispatchWeather(this.GET_COORDS)
		const { data } = await axios.get('/json/city.json') // 도시정보를 가져와.
		this.city = data.city
	},
	updated() {
		// console.log('updated')
		this.selected = this.GET_COORDS
	},
	mounted() {
		// console.log('mounted')
	},
	destroyed() {
		// console.log('destroyed')
	},
	methods: {
		onClick(e) {
			this.selected = ''
			this.dispatchWeather()
		},
		dispatchWeather(v = null) {
			// select의 값이 변하면 날씨정보를 요청하는 로직
			this.$store.dispatch('ACT_DAILY', v)
			this.$store.dispatch('ACT_COORDS', v)
		},
		getValue(obj, field, field2 = null) {
			return obj && obj[field]
							? field2 
								? Array.isArray(obj[field]) 
									? obj[field][0][field2]
									: obj[field][field2]
								: obj[field]
							: ''
		}
	}
}
</script>

<style lang="scss" scoped>
	.daily-wrapper {
		text-align: center;
		@include flex($ST,$CT);
		@include flexCol;
		.city-select {
			width: 50%;
			margin: 1em auto;
		}
		.daily-wrap {
			@include flex($ST,$CT);
			@include flexCol;
			margin-top: 1em;
			font-size: 1.5em;
			.icon-wrap {width:120px; margin: .5em 0;}
			.temp-wrap {margin: .5em 0;}
			.desc-wrap {margin: .25em 0;}
			.wind-wrap {margin: .25em 0;}
		}
	}
</style>