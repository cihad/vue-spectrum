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
				'is-open': open,
				'spectrum-Modal--fullscreen': fullscreen && !takeover,
				'spectrum-Modal--fullscreenTakeover': fullscreen && takeover
			}"
		>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "SpModal",
	props: {
		open: {
			type: Boolean,
			default: false
		},
		fullscreen: {
			type: Boolean,
			default: false
		},
		takeover: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>
@import "~@spectrum-css/modal/dist/index-vars.css";
</style>