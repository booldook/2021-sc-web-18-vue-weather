<template>
	<h2 class="title-wrap">
		날씨정보 {{ cityName }}
	</h2>
</template>

<script>
export default {
	name: 'Title',
	props: ['cityName']
}
</script>

<style scoped="scoped" lang="scss">
h2.title-wrap {
	padding: 1em 0;
	font-size: 2em;
	text-align: center;
}
</style>