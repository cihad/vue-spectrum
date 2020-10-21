<template>
	<sp-action-button
		:selected="isSelected"
		@click.native="clickHandler"
		v-bind="$attrs"
	>
		<slot />
	</sp-action-button>
</template>

<script>
import SpActionButton from "./SpActionButton"

export default {
	name: "SpToggleButton",
	components: {
		SpActionButton
	},
	props: {
		value: {},
		selected: {
			default: false,
			type: Boolean
		},
	},
	data() {
		return {
			defaultIsSelected: !!this.selected
		}
	},
	computed: {
		isSelected() {
			return this.value === undefined ? this.defaultIsSelected : this.value
		}
	},
	methods: {
		clickHandler() {
			this.value === undefined
				? this.defaultIsSelected = !this.defaultIsSelected
				: this.$emit('input', !this.value)
		}
	},
}
</script>

<style>

</style>