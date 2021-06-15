<template>
	<div class="list-wrap">
		<Icon :icon="icon" class="icon" />
		<div class="content-wrap">
			<Date :date="date" class="date" />
			<Temp :temp="temp" class="temp" />
			<Info :main="main" :description="description" class="info" />
			<Wind :wind="wind" class="wind" />
		</div>
	</div>
</template>

<script>
import Icon from './Icon.vue'
import Temp from './Temp.vue'
import Info from './Info.vue'
import Wind from './Wind.vue'
import Date from './Date.vue'
import { getValue } from '../modules/utils'


export default {
	name: 'List',
	components: { Icon, Temp, Info, Wind, Date },
	props: ['data'],
	computed: {
		icon: function() {
			return getValue(this.data, 'weather', 'icon')
		},
		date: function() {
			return getValue(this.data, 'dt')
		},
		temp: function() {
			return getValue(this.data, 'main', 'temp')
		},
		main: function() {
			return getValue(this.data, 'weather', 'main')
		},
		description: function() {
			return getValue(this.data, 'weather', 'description')
		},
		wind: function() {
			return {
				deg: getValue(this.data, 'wind', 'deg'),
				speed: getValue(this.data, 'wind', 'speed')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.list-wrap {
		width: 23%;
		margin: 1%;
		border: 1px solid #ccc;
		border-radius: 4px;
		@include flex;
		@include flexCol;
		@include MD {
			width: 31.3333%;
		}
		@include SM {
			width: 48%;
		}
		.icon {
			width: 60px;
			margin: auto;
		}
		.content-wrap {
			flex-grow: 1;
			background-color: #f1f1f1;
			padding: 1em;
			border-top: 1px solid #ddd;
			font-size: .75em;
			text-align: center;
			.temp {
				font-size: 1.5em;
				font-weight: bold;
				padding: .25em 0;
				color: #555;
			}
			.info {
				font-size: 1.25em;
			}
			.wind {
				font-size: 1.125em;
				margin-top: 1em;
			}
		}
	}
</style>