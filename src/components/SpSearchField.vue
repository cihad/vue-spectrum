<template>
	<div
		class="spectrum-Search"
		:class="{
			'is-disabled': disabled,
			'spectrum-Search--quiet': quiet,
		}"
	>
		<sp-text-field
			v-model="componentValue"
			type="search"
			v-bind="$attrs"
			:input-class="['spectrum-Search-input']"
			:disabled="disabled"
			:quiet="quiet"
			:focused.sync="focus"
		>
			<sp-icon
				ui
				slot="icon"
				:icon="$options.components.Magnifier"
				class="spectrum-UIIcon-Magnifier spectrum-Textfield-icon"
				focusable="false"
				aria-hidden="true"
			/>
		</sp-text-field>

		<button
			v-show="!!componentValue"
			type="reset"
			class="spectrum-ClearButton spectrum-Search-clearButton"
			@click="clearText"
		>
			<sp-icon
				ui
				:icon="$options.components.CrossSmall"
				class="spectrum-UIIcon-CrossSmall"
			/>
		</button>
	</div>
</template>

<script>
import SpTextField from './SpTextField'
import Magnifier from 'vue-spectrum-ui-icons/dist/Magnifier'
import CrossSmall from 'vue-spectrum-ui-icons/dist/CrossSmall'

export default {
	name: "SpSearchField",
	inheritAttrs: false,
	components: {
		SpTextField,
		Magnifier,
		CrossSmall,
	},
	props: {
		value: {},
		disabled: Boolean,
		quiet: Boolean,
		focused: Boolean
	},
	data() {
		return {
			componentValue: this.value,
			focus: this.focused,
		}
	},
	watch: {
		componentValue(newValue) {
			this.$emit('input', newValue)
		},
	},
	methods: {
		clearText() {
			this.componentValue = ""
			this.focus = true
		},
	}
}
</script>

<style>
@import "~@spectrum-css/search/dist/index-vars.css";
</style>