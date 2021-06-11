<template>
	<div class="daily-wrapper">
		<h2 class="title-wrap">
			날씨정보
		</h2>
		<b-form-select class="city-select" v-model="selected" :options="options" size="lg" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
	name: 'Daily',
	data() {
		return {
			city: [],
			selected: '',
		}
	},
	computed: {
		options: function() {
			const city = []
			this.city.forEach( v => {
				city.push({ 
					text: v.name, value: { lat: v.lat, lon: v.lon }, disabled: (v.lat && v.lon) ? false : true 
				})
			})
			return city
		}
	},
	async created() {
		this.$store.dispatch('ACT_DAILY', null)
		const { data } = await axios.get('/json/city.json')
		this.city = data.city
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