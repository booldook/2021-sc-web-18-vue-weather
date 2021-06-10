<template>
	<div class="header-wrapper">
		<h1 class="logo">
			<i class="bi bi-brightness-high"></i>
			<router-link to="/">TODAY WEATHER</router-link>
		</h1>
		<ul class="navi-wrap">
			<li class="navi">
				<router-link to="/">DAILY</router-link>
			</li>
			<li class="navi">
				<router-link to="/days">5DAYS</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="scss" scoped>
.header-wrapper {
	color: $colorLighter;
	background-color: $colorDarker;
	@include flex($SB, $CT);
	.logo {
		padding: $md;
		i {
			margin-right: $s75;
		}
	}
	.navi-wrap {
		@include flex;
		.navi {
			padding: $md;
			&:hover {
				color: $colorBlack;
				background-color: $colorLight;
			}
		}
	}
}
</style>