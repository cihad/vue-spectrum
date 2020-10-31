<template>
	<component
		:is="vertical ? 'div' : 'hr'"
		class="spectrum-Divider"
		:class="classes"
	/>
</template>

<script>
const sizeMap = {
	S: 'small',
	M: 'medium',
	L: 'large'
}

export default {
	name: "SpDivider",
	props: {
		vertical: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: 'L',
			validator(value) {
				return Object.keys(sizeMap).includes(value)
			}
		}
	},
	computed: {
		classes() {
			return [
				`spectrum-Divider--${sizeMap[this.size]}`,
				`spectrum-Divider--${this.vertical ? 'vertical' : 'horizontal'}`
			]
		}
	}
}
</script>

<style>
@import "~@spectrum-css/divider/dist/index-vars.css";

.spectrum-Divider--vertical {
	height: auto;
}
</style>