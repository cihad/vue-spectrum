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
			<vnode-syringe
				class&="spectrum-FieldGroup-item"
				:emphasized="emphasized"
			>
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
	name: "SpRadioGroup",
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
	},
	provide() {
		return {
			spRadio: {
				setValue: this.setValue,
				isChecked: this.isChecked
			}
		}
	},
	data() {
		return {
			groupValue: this.value
		}
	},
	watch: {
		groupValue() {
			alert("groupValue: " + this.groupValue)
		}
	},
	methods: {
		isChecked(value) {
			return this.value == value
		},
		setValue(value) {
			this.$emit('input', value)
			this.$emit('selection-change')
		},
	}
}
</script>