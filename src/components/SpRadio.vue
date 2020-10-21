<template>
	<label
		class="spectrum-Radio"
		:class="{
			'spectrum-Radio--quiet': !emphasized,
			'is-invalid': validationState === 'invalid',
			'is-disabled': disabled,
			'is-hovered': hovered
		}"
		@mouseenter="hovered = true"
		@mouseleave="hovered = false"
	>

		<input
			:value="value"
			:checked="isChecked"
			@change="changeHandler"
			type="radio"
			class="spectrum-Radio-input"
		>

		<span class="spectrum-Radio-button"></span>

		<label class="spectrum-Radio-label">
			<slot />
		</label>
	</label>
</template>

<script>
export default {
	name: "SpRadio",
	props: {
		value: {},
		checked: {},
		emphasized: {
			type: Boolean,
			default: false
		},
		validationState: {},
		disabled: {
			type: Boolean,
			default: false
		},
	},
	inject: {
		spRadio: {
			default: () => ({ standalone: true })
		}
	},
	data() {
		return {
			hovered: false,
		}
	},
	computed: {
		isInGroup() {
			return !this.spRadio?.standalone
		},
		isChecked() {
			return this.spRadio?.isChecked(this.value)
		}
	},
	methods: {
		changeHandler() {
			this.spRadio?.setValue(this.value)
		},
	}
}
</script>

<style>
@import "~@spectrum-css/radio/dist/index-vars.css";
</style>