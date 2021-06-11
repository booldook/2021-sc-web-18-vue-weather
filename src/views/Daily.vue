<template>
	<div class="daily-wrapper">
		DAILY
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
		
	},
	created() {
		this.$store.dispatch('ACT_DAILY', null)
	}
}
</script>

<style lang="scss" scoped>
	.daily-wrapper {
		
	}
</style>