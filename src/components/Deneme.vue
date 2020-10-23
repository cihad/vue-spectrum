<template>
	<div>
		<input type="checkbox" id="checkbox" v-model="modelValue" :value="value" />
		{{ modelValue }}
	</div>
</template>

<script>
export default {
	name: "Deneme",
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		value: {},
		checked: {}
	},
	data() {
		return {
			modelValue: this.checked
		}
	},
	watch: {
		modelValue(newValue) {
			this.$emit("change", newValue);
		},
		checked(newValue) {
			this.modelValue = newValue
		}
	},
};
</script>

<style>
</style>