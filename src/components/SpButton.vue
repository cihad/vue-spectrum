<template>
	<button
		class="spectrum-Button"
		:class="classes"
		@click="$emit('click', $event)"
	>
		<subslot element="@SpIcon" />
		
		<sp-text class="spectrum-Button-label">
			<subslot :vnodes="$slots.default.filter(vnode => !vnode.tag)" />
		</sp-text>
	</button>
</template>

<script>
import SpText from './SpText'
import SpIcon from './SpIcon'
import Subslot from 'vue-subslot'

export default {
	name: "SpButton",
	components: {
		SpText,
		SpIcon,
		Subslot,
	},
	inject: {
		spButton: {
			default: () => {}
		}
	},
	props: {
		variant: {
			type: String,
			default: 'primary',
			validator(value) {
				return [
					'primary',
					'secondary',
					'cta',
					'warning',
					'negative',
				].includes(value)
			}
		},
		quiet: {
			type: Boolean,
			default: false
		},
		overBackground: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes() {
			return {
				'spectrum-Button--quiet': this.quiet,
				'spectrum-Button--overBackground': this.overBackground,
				[`spectrum-Button--${this.variantClass}`]: !!this.variant && !this.overBackground,
			}
		},
		variantClass() {
			return this.variant === 'negative' ? 'warning' : this.variant
		}
	},
	
}
</script>

<style>
@import "~@spectrum-css/button/dist/index-vars.css";
</style>