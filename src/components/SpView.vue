<template>
	<component
		:is="elementType"
		v-bind="$attrs"
	/>
</template>

<script>
export default {
	name: "SpView",
	props: {
		elementType: {
			default: 'div'
		}
	}
}
</script>

<style>

</style>