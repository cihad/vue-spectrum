<template>
	<div>
		<page-title>sp-field-label</page-title>

		<demo-title>Standart</demo-title>
		<sp-field-label>First name</sp-field-label>

		<demo-title>Required</demo-title>
		<sp-field-label required>First name</sp-field-label>

		<demo-title>Required, Necessity indicator is icon</demo-title>
		<sp-field-label required necessity-indicator="icon">First name</sp-field-label>

		<demo-title>Optional, Necessity indicator is label</demo-title>
		<sp-field-label necessity-indicator="label">First name</sp-field-label>

		<demo-title>Left</demo-title>
		<sp-field-label style="width: 100px">First name</sp-field-label>
		<sp-text-field></sp-text-field>

		<demo-title>Right</demo-title>
		<sp-field-label right style="width: 100px">First name</sp-field-label>
		<sp-text-field></sp-text-field>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>