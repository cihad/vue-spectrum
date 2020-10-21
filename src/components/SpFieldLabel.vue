<template>
	<label
		class="spectrum-Fieldlabel"
		:class="{
			'spectrum-FieldLabel--right': right
		}"
	>
		<slot />
		&#8203;
		<span
			v-if="required && !necessityIndicator || necessityIndicator === 'label'"
			aria-hidden="true"
		>
			(required)
		</span>

		<sp-icon
			v-else-if="required && necessityIndicator == 'icon'"
			ui
			:icon="$options.components.Asterisk"
			class="spectrum-Icon spectrum-UIIcon-Asterisk spectrum-FieldLabel-requiredIcon"
		/>

		<span
			v-else-if="!required && necessityIndicator === 'label'"
			aria-hidden="true"
		>
			(optional)
		</span>
	</label>
</template>

<script>
import SpIcon from './SpIcon.vue'
import Asterisk from 'vue-spectrum-ui-icons/dist/Asterisk'

export default {
	components: {
		SpIcon,
		Asterisk,
	},
	props: {
		right: {
			type: Boolean,
			default: false
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
		}
	}
}
</script>

<style>
@import "~@spectrum-css/fieldlabel/dist/index-vars.css";
</style>