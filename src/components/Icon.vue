<template>
	<div>
		<img :src="src" alt="" class="w-100">
	</div>
</template>

<script>
const SRC = 'https://openweathermap.org/img/wn/'

export default {
	name: 'Icon',
	props: ['icon', 'width'],
	computed: {
		style: function() {
			return 'width: ' + this.width 
		},
		src: function() {
			return (this.icon !== '' && this.icon)
							? SRC + this.icon + '@2x.png'
							: 'https://via.placeholder.com/50'
		}
	}
}
</script>

<style scoped="scoped" lang="scss">
	
</style>