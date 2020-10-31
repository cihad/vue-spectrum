<template>
	<div
		class="spectrum-Popover"
		:class="classes"
	>
		<slot />
	</div>
</template>

<script>
import { wrapArray } from '../utils/array'

export default {
	name: "SpPopover",
	props: {
		open: {
			default: true,
			type: Boolean
		},
		direction: {
			type: String,
			default: 'bottom',
			validator(value) {
				return ['top', 'bottom', 'left', 'right'].includes(value)
			}
		},
	},
	inject: {
		spPopover: {
			default: () => ({ standalone: true })
		}
	},
	computed: {
		classes() {
			return [
				{
					'is-open': this.open,
				},
				...wrapArray(this.spPopover?.classes)
			]
		}
	}
}
</script>

<style>
@import "~@spectrum-css/popover/dist/index-vars.css";

.spectrum-Popover {
	z-index: 10;
}
</style>