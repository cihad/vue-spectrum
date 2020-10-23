<template>
	<div>
		<demo-title>Pure</demo-title>
		<sp-checkbox>Unsubscribe</sp-checkbox>

		<demo-title>with v-model</demo-title>
		<sp-checkbox v-model="checkboxValue">Subscribe</sp-checkbox>
		<br>
		{{ `You are ${checkboxValue ? 'subscribed' : 'unsubscribed'}` }}

		<demo-title>Validation</demo-title>
		<sp-checkbox validation-state="invalid">I accept the terms and conditions</sp-checkbox>

		<demo-title>Disabled</demo-title>
		<sp-checkbox disabled>Subscribe</sp-checkbox>

		<demo-title>Emphasized</demo-title>
		<sp-checkbox v-model="emphasizedValue" emphasized>Subscribe</sp-checkbox>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checkboxValue: true,
			emphasizedValue: true
		}
	}
}
</script>