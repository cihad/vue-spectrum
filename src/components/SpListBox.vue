<template>
	<div class="spectrum-Menu">
		<subslot :element="['@SpListBoxItem', '@SpListBoxSection']" />
	</div>
</template>

<script>
import { wrapArray } from '../utils/array'
import Subslot from 'vue-subslot'
import SpListBoxItem from './SpListBoxItem'
import SpListBoxSection from './SpListBoxSection'

export default {
	name: "SpListBox",
	components: {
		Subslot,
		SpListBoxItem,
		SpListBoxSection,
	},
	props: {
		value: {},
	},
	provide() {
		let classes;
		if (this.selectionMode) classes = 'is-selectable'

		const self = this

		return {
			spListBoxItem: {
				classes,
				toggleSelect: this.toggleSelect,
				isSelected: this.isSelected,
			},
			spListBoxSection: {
				isFirst(section) {
					return self.$children.indexOf(section) === 0
				}
			}
		}
	},
	methods: {
		toggleSelect(item) {
			let newValue;

			if (Array.isArray(this.value)) {
				let index = this.value.findIndex(it => it === item);
				const arr = this.value
				
				newValue = index < 0
					? [...this.value, item]
					: arr.splice(index, 1) && arr
			} else {
				newValue = item
			}

			this.$emit('input', newValue)
			this.$emit('selection-change')
		},
		isSelected(item) {
			if (item === undefined) return false

			return wrapArray(this.value).includes(item)
		}
	}
}
</script>

<style>
@import "~@spectrum-css/menu/dist/index-vars.css";

.spectrum-Menu {
	user-select: none;
}
</style>