<template>
	<div
		class="spectrum-Switch"
		:class="{
			'spectrum-Switch--emphasized': emphasized,
			'is-disabled': disabled,
		}"
	>
		<input
			:disabled="disabled"
			:checked="value"
			@change="$emit('input', $event.target.checked)"
			type="checkbox"
			class="spectrum-Switch-input"
		>
		<span class="spectrum-Switch-switch"></span>
		<label class="spectrum-Switch-label">
			<slot />
		</label>
	</div>
</template>

<script>
export default {
	name: "SpSwitch",
	props: {
		value: {},
		emphasized: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
}
</script>

<style>
@import "~@spectrum-css/switch/dist/index-vars.css"
</style>