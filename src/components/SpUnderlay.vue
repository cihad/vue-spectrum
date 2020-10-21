<template>
	<div
		class="spectrum-Underlay"
		:class="{ 'is-open': open }"
		aria-hidden="true"
		@click="$emit('click', $event)"
	></div>
</template>

<script>
export default {
	props: {
		open: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>
@import "~@spectrum-css/underlay/dist/index-vars.css";
</style>