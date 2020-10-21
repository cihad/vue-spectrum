<template>
	<div
		class="spectrum-ButtonGroup"
		:class="{
			'spectrum-ButtonGroup--vertical': vertical,
			'spectrum-ButtonGroup--alignEnd': align === 'end',
			'spectrum-ButtonGroup--alignCenter': align === 'center'
		}"
		ref="group"
	>
		<vnode-syringe class&="spectrum-ButtonGroup-item" :disabled="disabled">
			<slot />
		</vnode-syringe>
	</div>
</template>

<script>
import vnodeSyringe from 'vue-vnode-syringe'

export default {
	name: "SpButtonGroup",
	components: {
		vnodeSyringe,
	},
	props: {
		vertical: {
			default: false,
			type: Boolean,
		},
		align: {
			default: 'start',
			type: String
		},
		disabled: {
			default: false,
			type: Boolean
		}
	},
}
</script>

<style>
@import "~@spectrum-css/buttongroup/dist/index-vars.css";
</style>