<template>
	<div class="header-wrapper">
		<h1 class="logo">
			<i class="fa fa-sun"></i>
			<a href="">TODAY WEATHER</a>
		</h1>
		<ul class="navi-wrap">
			<li class="navi">
				<a href="">DAILY</a>
			</li>
			<li class="navi">
				<a href="">5DAYS</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-wrapper {
	color: $colorLighter;
	background-color: $colorDarker;
	@include flex($SB, $CT);
	.logo {
		padding: $md
	}
}
</style>