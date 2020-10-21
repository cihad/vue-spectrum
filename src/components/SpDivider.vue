<template>
	<hr
		class="spectrum-Divider"
		:class="classes"	
	>
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
		orientation: {
			type: String,
			default: 'horizontal',
			validator(value) {
				return [
					'horizontal',
					'vertical'
				].indexOf(value) !== -1
			}
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
				`spectrum-Divider--${this.orientation}`
			]
		}
	}
}
</script>

<style>
@import "~@spectrum-css/divider/dist/index-vars.css";
</style>