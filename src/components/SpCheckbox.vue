<template>
	<label
		class="spectrum-Checkbox"
		:class="{
			'is-checked': checked,
			'is-indeterminate': indeterminate,
			'spectrum-Checkbox--quiet': !isEmphasized,
			'spectrum-Checkbox--emphasized': isEmphasized,
			'is-invalid': validationState === 'invalid',
			'is-disabled': isDisabled,
			'is-hovered': hovered
		}"
		@mouseenter="hovered = true"
		@mouseleave="hovered = false"
	>

		<input
			:checked="isChecked"
			@change="changeHandler"
			type="checkbox"
			class="spectrum-Checkbox-input"
			:disabled="isDisabled"
		>

		<span class="spectrum-Checkbox-box">
			<sp-icon
				v-if="indeterminate"
				ui
				:icon="$options.components.DashSmall"
				class="spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark" 
			/>
			<sp-icon
				v-else
				ui
				:icon="$options.components.CheckmarkSmall"
				v-show="isChecked"
				class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark"
			/>
		</span>

		<span class="spectrum-Checkbox-label">
			<slot />
		</span>
	</label>
</template>

<script>
import DashSmall from 'vue-spectrum-ui-icons/dist/DashSmall'
import CheckmarkSmall from 'vue-spectrum-ui-icons/dist/CheckmarkSmall'
import SpIcon from './SpIcon'

export default {
	name: "SpCheckbox",
	components: {
		SpIcon,
		DashSmall,
		CheckmarkSmall,
	},
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		value: {},
		checked: Boolean,
		indeterminate: {
			type: Boolean,
			default: false,
		},
		emphasized: {
			type: Boolean,
			default: false
		},
		validationState: {},
		disabled: {
			type: Boolean,
			default: false
		},
	},
	inject: {
		spCheckbox: {
			default: () => ({ standalone: true })
		}
	},
	data() {
		return {
			hovered: false,
		}
	},
	computed: {
		isChecked() {
			return this.isInGroup
				? this.spCheckbox.isChecked(this.value)
				: this.checked
		},
		isInGroup() {
			return !this.spCheckbox?.standalone
		},
		isDisabled() {
			return this.disabled || (this.isInGroup && this.spCheckbox?.isDisabled())
		},
		isEmphasized() {
			return this.emphasized || (this.isInGroup && this.spCheckbox?.isEmphasized())
		},
	},
	methods: {
		changeHandler() {
			const newValue = this.isInGroup
				? this.value
				: this.checked

			if (this.isInGroup) {
				this.spCheckbox.toggleSelect(this.value)
			} else {
				this.$emit('change', !this.checked)
			}
		},
	}
}
</script>

<style>
@import "~@spectrum-css/checkbox/dist/index-vars.css";
</style>