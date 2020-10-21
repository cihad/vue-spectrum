<template>
	<div
		class="spectrum-ActionGroup"
		:class="classes"
	>
		<proxi
			proxi-key="sp-action-button"
			class="spectrum-ActionGroup-item"
			:child-quiet="quiet"
		>
			<slot />
		</proxi>
	</div>
</template>

<script>
import Proxi from 'vue-proxi'

export default {
	name: "SpActionGroup",
	components: {
		Proxi,
	},
	props: {
		value: {
		},
		vertical: {
			type: Boolean,
			default: false,
		},
		align: {
			default: 'start',
			type: String
		},
		disabled: {
			default: false,
			type: Boolean
		},
		quiet: {
			default: false,
			type: Boolean
		},
		compact: {
			type: Boolean,
			default: false,
		},
		justified: {
			default: false,
			type: Boolean
		}
	},
	provide() {
		let spActionButtonClasses = ['spectrum-ActionGroup-item']

		if (this.quiet) spActionButtonClasses = [
			...spActionButtonClasses,
			'spectrum-ActionButton--quiet'
		]

		return {
			spActionButton: {
				class: spActionButtonClasses,
				data: this.injection,
				setValue: this.setValue,
			}
		}
	},
	data() {
		return {
			injection: {
				value: this.value
			}
		}
	},
	computed: {
		classes() {
			return {
				'spectrum-ActionGroup--vertical': this.vertical,
				'spectrum-ActionGroup--alignEnd': this.align === 'end',
				'spectrum-ActionGroup--alignCenter': this.align === 'center',
				'spectrum-ActionGroup--quiet': this.quiet,
				'spectrum-ActionGroup--compact': this.compact,
				'spectrum-ActionGroup--justified': this.justified,
			}
		}
	},
	watch: {
		value(value) {
			this.injection.value = value
		},
		disabled(newValue) {
			this.$children.forEach(child => child.disabled = newValue);
		}
	},
	methods: {
		setValue(value) {
			this.$emit('input', value)
		}
	}
}
</script>

<style>
@import "~@spectrum-css/actiongroup/dist/index-vars.css";
</style>	