<template>
	<div class="container">
		<Header />
		<transition name="slide-fade" mode="out-in">
			<router-view class="router-wrapper"/>
		</transition>
		<Footer />
		<Loading 
		:active.sync="GET_LOADING" 
		:opacity="opacity" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Loading from 'vue-loading-overlay'

export default {
	name: 'App',
	components: { Header, Footer, Loading },
	data() {
		return {
			opacity: .9
		}
	},
	computed: {
		...mapGetters(['GET_LOADING'])
	}
}
</script>

<style lang="scss" scoped>
.container {
	margin: auto;
	height: 100vh;
	overflow: hidden;
	@include flex($FS, $ST, nowrap);
	@include flexCol;
	.router-wrapper {
		flex-grow: 1;
		overflow-y: auto;
		border-left: 1px solid $colorLighter;
		border-right: 1px solid $colorLighter;
	}
}
</style>