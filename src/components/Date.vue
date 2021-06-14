<template>
	<div>{{ datetime }}</div>
</template>

<script>
import moment from 'moment'

export default {
	name: 'Date',
	props: ['date'],
	computed: {
		datetime: function() {
			return moment(Number(this.date) * 1000).format('M월 D일 hh시 mm분 기준')
		}
	}
}
</script>

<style scoped="scoped" lang="scss">

</style>