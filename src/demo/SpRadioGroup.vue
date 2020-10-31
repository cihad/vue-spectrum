<template>
	<div>
		<page-title>sp-radio-group</page-title>

		<demo-title>Default</demo-title>
		<sp-radio-group label="Size" v-model="size">
			<sp-radio value="small">Small</sp-radio>
			<sp-radio value="medium">Medium</sp-radio>
			<sp-radio value="large">Large</sp-radio>
		</sp-radio-group>

		<demo-title>Vertical</demo-title>
		<sp-radio-group label="Size" v-model="size" vertical>
			<sp-radio value="small">Small</sp-radio>
			<sp-radio value="medium">Medium</sp-radio>
			<sp-radio value="large">Large</sp-radio>
		</sp-radio-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			size: "medium"
		}
	}
}
</script>

<style>

</style>