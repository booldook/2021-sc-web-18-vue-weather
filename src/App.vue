<template>
	<div class="container">
		<Header />
		<transition name="slide-fade" mode="out-in">
			<router-view class="router-wrapper"/>
		</transition>
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	components: { Header, Footer },
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.container {
	margin: auto;
	height: 100vh;
	overflow: hidden;
	@include flex;
	@include flexCol;
	.router-wrapper {
		flex-grow: 1;
		border-left: 1px solid $colorLighter;
		border-right: 1px solid $colorLighter;
	}
}
</style>