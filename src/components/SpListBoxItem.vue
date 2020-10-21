<template>
	<div
		class="spectrum-Menu-item"
		:class="classes"
		@click="toggleSelect"
	>
		<span class="spectrum-Menu-itemLabel">
			<slot />
		</span>

		<sp-icon
			ui
			:icon="$options.components.CheckmarkMedium"
			v-show="selected"
			class="spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark spectrum-Menu-itemIcon"
		/>
	</div>
</template>

<script>
import vnodeSyringe from 'vue-vnode-syringe'
import Subslot from 'vue-subslot'
import SpIcon from './SpIcon'
import CheckmarkMedium from 'vue-spectrum-ui-icons/dist/CheckmarkMedium'
import { wrapArray } from '../utils/array'

export default {
	name: "SpListBoxItem",
	components: {
		vnodeSyringe,
		Subslot,
		SpIcon,
		CheckmarkMedium,
	},
	props: {
		value: {},
		disabled: {
			default: false,
			type: Boolean
		},
	},
	inject: {
		spListBoxItem: {
			default: () => ({ standalone: true })
		}
	},
	computed: {
		selected() {
			return this.spListBoxItem.isSelected(this.value)
		},
		classes() {
			return [
				this.spListBoxItem?.classes,
				{ 
					'is-selected': this.selected,
					'is-disabled': this.disabled
				}
			]
		}
	},
	created() {
		if (!this.isInListBox) console.warn("<sp-list-box-item> can't be standalone. It has to use in <sp-list-box>")
	},
	methods: {
		toggleSelect() {
			if (this.disabled) return
			this.spListBoxItem?.toggleSelect(this.value)
		},
		isInListBox() {
			return !this.spListBoxItem?.standalone
		}
	}
}
</script>

<style>
</style>