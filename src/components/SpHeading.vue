<template>
	<component
		:is="'h' + level"
		class="spectrum-Heading"
		:class="classes"
	>
		<slot />
	</component>
</template>

<script>
export const sizes = [
	'XXXL',
	'XXL',
	'XL',
	'L',
	'M',
	'S',
	'XS',
	'XXS',
]

export default {
	name: "SpHeading",
	props: {
		level: {
			type: Number,
			default: 1
		},
		size: {
			type: String,
			validator(value) {
				return sizes.includes(value)
			}
		},
		heavy: {
			type: Boolean,
			default: false,
		},
		light: {
			type: Boolean,
			default: false,
		},
		serif: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes() {
			return {
				[`spectrum-Heading--${this.size}`]: !!this.size,
				'spectrum-Heading--heavy': this.heavy,
				'spectrum-Heading--light': this.light,
				'spectrum-Heading--serif': this.serif,
			}
		}
	}
}
</script>

<style>
@import "~@spectrum-css/typography/dist/index-vars.css";
</style>