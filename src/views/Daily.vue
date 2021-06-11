<template>
	<div class="daily-wrapper">
		DAILY
		<p class="">{{ getLat }}</p>
		<p class="">{{ getLon }}</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Daily',
	data() {
		return {
			
		}
	},
	computed: {
		/*
		getLat: function() {
			return (this.$store.state.coords) ? this.$store.state.coords.lat : ''
		},
		getLon: function() {
			return (this.$store.state.coords) ? this.$store.state.coords.lon : ''
		}
		*/
	},
	created() {
		this.$store.dispatch('ACT_COORDS', null)
	}
}
</script>

<style lang="scss" scoped>
	.daily-wrapper {
		
	}
</style>