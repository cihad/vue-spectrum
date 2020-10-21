<template>
	<a
		class="spectrum-Link"
		:class="classes"
	>
		<slot />
	</a>
</template>

<script>
export default {
	name: "SpLink",
	props: {
		secondary: {
			default: false,
			type: Boolean
		},
		overBackground: {
			default: false,
			type: Boolean,
		},
		quiet: {
			default: false,
			type: Boolean
		}
	},
	computed: {
		classes() {
			return {
				'spectrum-Link--secondary': this.secondary,
				'spectrum-Link--overBackground': this.overBackground,
				'spectrum-Link--quiet': this.quiet,
			}
		}
	}
}
</script>

<style>
@import "~@spectrum-css/link/dist/index-vars.css";
</style>