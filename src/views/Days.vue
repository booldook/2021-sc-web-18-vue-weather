<template>
	<div class="days-wrapper">
		DAYS
	</div>
</template>

<script>
export default {
	name: 'DAYS',
	created() {
		this.$store.dispatch('ACT_DAYS', null)
	}
}
</script>

<style lang="scss" scoped>
	.days-wrapper {
		font-size: 10vh;
	}
</style>