<template>
	<div
		class="spectrum-Modal-wrapper"
		:class="{
			'is-open': open
		}"
	>
		<div
			class="spectrum-Modal"
			:class="{
				'is-open': open
			}"
		>
			<slot />
		</div>
	</div>
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
@import "~@spectrum-css/modal/dist/index-vars.css";
</style>