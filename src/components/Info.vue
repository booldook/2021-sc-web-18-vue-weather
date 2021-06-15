<template>
	<div>{{ main }} / {{ description }}</div>
</template>

<script>
export default {
	name: 'Info',
	props: ['main', 'description'],
}
</script>

<style scoped="scoped" lang="scss">

</style>