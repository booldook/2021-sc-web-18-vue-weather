<template>
	<div class="days-wrapper">
		<Title class="title-wrap" :title="title" />
		<div class="list-wrapper">
			<b-card
			v-for="v in lists"
			:key="v.id" 
			class="list"
			title="Card Title" 
			img-src="https://picsum.photos/600/300/?image=25" 
			img-alt="Image" 
			img-top tag="article"> 
				<b-card-text>
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</b-card-text>
			</b-card>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getValue } from '../modules/utils'

import Title from '../components/Title.vue'
import Date from '../components/Date.vue'

export default {
	name: 'DAYS',
	components: { Title, Date },
	data() {
		return {
			lists: [
				{ id: "1" },
				{ id: "2" },
				{ id: "3" },
				{ id: "4" },
				{ id: "5" },
				{ id: "6" },
				{ id: "7" },
				{ id: "8" },
				{ id: "9" },
				{ id: "10" },
				{ id: "11" },
				{ id: "12" },
				{ id: "13" },
				{ id: "14" },
				{ id: "15" },
				{ id: "16" },
			] 
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
		@include flex($ST, $ST);
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