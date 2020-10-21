<template>
	<component
		:is="icon"
		:class="classes"
		:viewBox="viewBox"
		:height="null"
		:width="null"
	/>
</template>

<script>
const iconSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default {
	name: "SpIcon",
	props: {
		icon: {
			required: true
		},
		size: {
			type: String,
			default: 'M',
			validator(value) {
				return iconSizes.indexOf(value) !== -1
			}
		},
		ui: {
			type: Boolean,
			default: false,
		}
	},
	computed: {
		classes() {
			return [
				'spectrum-Icon',
				`spectrum-Icon--size${this.size}`,
			]
		},
		viewBox() {
			if (this.ui) return

			return '0 0 36 36'
		}
	}
}
</script>

<style>
@import "~@spectrum-css/icon/dist/index-vars.css";
</style>