<template>
	<div>{{ dir }} {{ speed }}</div>
</template>

<script>
/* 
wind: {
	deg: 270,
	speed: 3.5
}
*/
export default {
	name: 'Wind',
	props: ['wind'],
	computed: {
		dir: function() {
			const deg = this.wind.deg
			return (
				deg > 345 || deg <= 15
				? '북풍'
				: deg > 15 && deg <= 75
				? '북동풍'
				: deg > 75 && deg <= 105
				? '동풍'
				: deg > 105 && deg <= 165
				? '남동풍'
				: deg > 165 && deg <= 195
				? '남풍'
				: deg > 195 && deg <= 255
				? '남서풍'
				: deg > 255 && deg <= 285
				? '서풍'
				: '북서풍'
			)
		},
		speed: function() {
			return this.wind.speed + 'm/s'
		}
	}
}
</script>

<style scoped="scoped" lang="scss">

</style>