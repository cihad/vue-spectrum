<template>
	<div
		:class="classes"
		dir="ltr"
	>
		<slot />
	</div>
</template>

<script>
export default {
	name: "SpProvider",
	props: {
		theme: {
			type: String,
			default: 'light',
			validator(value) {
				return [
					'lightest',
					'light',
					'dark',
					'darkest',
				].includes(value)
			}
		},
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return [
					'medium',
					'large',
				].includes(value)
			}
		}
	},
	computed: {
		classes() {
			return [
				'spectrum',
				`spectrum--${this.size}`,
				`spectrum--${this.theme}`,
			]
		}
	}
}
</script>

<style>
@import "~@spectrum-css/vars/dist/spectrum-global.css";

@import "~@spectrum-css/vars/dist/spectrum-medium.css";
@import "~@spectrum-css/vars/dist/spectrum-large.css";

@import "~@spectrum-css/vars/dist/spectrum-lightest.css";
@import "~@spectrum-css/vars/dist/spectrum-light.css";
@import "~@spectrum-css/vars/dist/spectrum-dark.css";
@import "~@spectrum-css/vars/dist/spectrum-darkest.css";

@import "~@spectrum-css/page/dist/index-vars.css";
@import "~@spectrum-css/typography/dist/index-vars.css";
</style>
