<template>
	<div
		class="spectrum-Textfield"
		:class="{
			'is-disabled': disabled,
			'is-invalid': invalid,
			'is-valid': valid,
			'is-focused': focus,
			'spectrum-Textfield--quiet': quiet,
		}"
	>
		<slot name="icon" />

		<sp-icon
			v-if="valid"
			ui
			:icon="$options.components.CheckmarkMedium"
			class="spectrum-UIIcon-CheckmarkMedium spectrum-Textfield-validationIcon"
			focusable="false"
			aria-hidden="true"
		/>

		<sp-icon
			v-if="invalid"
			ui
			:icon="$options.components.AlertMedium"
			class="spectrum-UIIcon-AlertMedium spectrum-Textfield-validationIcon"
			focusable="false"
			aria-hidden="true"
		/>

		<input
			ref="input"
			:type="type"
			v-model="componentValue"
			class="spectrum-Textfield-input"
			:class="inputClass"
			v-bind="$attrs"
			@focus="focus = true"
			@blur="focus = false"
			:disabled="disabled"
		/>
	</div>
</template>

<script>
import CheckmarkMedium from "vue-spectrum-ui-icons/dist/CheckmarkMedium"
import AlertMedium from "vue-spectrum-ui-icons/dist/AlertMedium"

export default {
	name: "SpTextField",
	inheritAttrs: false,
	components: {
		CheckmarkMedium,
		AlertMedium,
	},
	props: {
		value: {},
		type: {
			default: 'text',
			type: String
		},
		valid: Boolean,
		invalid: Boolean,
		focused: Boolean,
		quiet: Boolean,
		disabled: Boolean,
		inputClass: {
			default() {
				return []
			}
		}
	},
	data() {
		return {
			focus: this.focused,
			componentValue: this.value
		}
	},
	watch: {
		componentValue(newValue) {
			this.$emit('input', newValue)
		},
		value(newValue) {
			this.componentValue = newValue
		},
		focused(newValue) {
			this.focus = newValue
		},
		focus(newValue) {
			this.$emit("update:focused", newValue)
			if (!newValue) return
			this.$refs.input.focus()
		}
	}
}
</script>

<style>
@import "~@spectrum-css/textfield/dist/index-vars.css";
</style>