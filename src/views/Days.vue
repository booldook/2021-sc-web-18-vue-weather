<template>
	<div class="days-wrapper">
		<Title class="title-wrap" :title="title" />
		<div class="list-wrapper">
			<List v-for="v in GET_DAYS.list" :key="v.id" :data="v" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getValue } from '../modules/utils'

import Title from '../components/Title.vue'
import Date from '../components/Date.vue'
import List from '../components/List.vue'

export default {
	name: 'DAYS',
	components: { Title, Date, List },
	data() {
		return {
			
		}
	},
	computed: {
		...mapGetters(['GET_COORDS', 'GET_DAYS']),
		title: function() {
			return getValue(this.GET_DAYS, 'city', 'name') + ', '+ getValue(this.GET_DAYS, 'city', 'country')
		},
		date: function() {
			return
		}
	},
	created() {
		this.$store.dispatch('ACT_DAYS', this.GET_COORDS)
	}
}
</script>

<style lang="scss" scoped>
	.days-wrapper {
		@include flex($ST, $ST, nowrap);
		@include flexCol;
		font-size: 1em;
		.title-wrap {
			font-size: 2em;
			margin: .5em 0 .25em .5em;
		}
		.list-wrapper {
			flex-grow: 1;
			margin-bottom: 1em;
			overflow: auto;
			@include flex($FS);
			.list {
				width: 23%;
				border: 1px solid #ccc;
				margin: 1%;
			}
		}
	}
</style>