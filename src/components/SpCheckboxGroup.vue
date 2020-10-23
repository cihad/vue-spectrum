<template>
	<sp-field-group>
		<sp-field-label
			v-if="label"
			:required="required"
			:necessity-indicator="necessityIndicator"
		>
			{{ label }}
		</sp-field-label>

		<sp-field-group
			:orientation="orientation"
		>
			<vnode-syringe class&="spectrum-FieldGroup-item" :emphasized="emphasized">
				<slot />
			</vnode-syringe>
		</sp-field-group>
	</sp-field-group>
</template>

<script>
import vnodeSyringe from 'vue-vnode-syringe'
import SpFieldGroup from './SpFieldGroup'
import SpFieldLabel from './SpFieldLabel'

export default {
	name: "SpCheckboxGroup",
	components: {
		vnodeSyringe,
		SpFieldGroup,
		SpFieldLabel,
	},
	props: {
		value: {},
		label: {
			type: String
		},
		orientation: {
			type: String,
			default: 'vertical',
			validator(value) {
				return [
					'vertical',
					'horizontal'
				].indexOf(value) !== -1
			}
		},
		required: {
			type: Boolean,
			default: false
		},
		necessityIndicator: {
			type: String,
			validator(value) {
				return [
					'icon',
					'label'
				].indexOf(value) !== -1
			}
		},
		emphasized: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false,
		}
	},
	provide() {
		return {
			spCheckbox: {
				setValue: this.setValue,
				isChecked: this.isChecked,
				toggleSelect: this.toggleSelect,
				isDisabled: this.isDisabled,
				isEmphasized: this.isEmphasized,
			}
		}
	},
	methods: {
		isChecked(value) {
			return this.value && this.value.includes(value)
		},
		isDisabled() {
			return this.disabled
		},
		isEmphasized() {
			return this.emphasized
		},
		toggleSelect(value) {
			if (!this.value) return

			let newValue;

			let index = this.value.findIndex(it => it === value);
			const arr = this.value
			
			newValue = index < 0
				? [...this.value, value]
				: arr.splice(index, 1) && arr

			this.$emit('input', newValue)
			this.$emit('selection-change')
		}
	}
}
</script>