<template>
	<component
		:is="elementType"
		v-bind="$attrs"
	/>
</template>

<script>
export default {
	props: {
		elementType: {
			default: 'div'
		}
	}
}
</script>

<style>

</style>