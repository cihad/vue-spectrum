<template>
	<div
		class="spectrum-QuickActions"
		:class="{
			'spectrum-QuickActions--textOnly': textOnly,
			'is-open': open
		}"
	>
		<proxi proxi-key="sp-action-button" :child-quiet="true">
			<slot />
		</proxi>
	</div>
</template>

<script>
import Proxi from 'vue-proxi'

export default {
	name: "SpQuickActions",
	components: {
		Proxi,
	},
	props: {
		open: {
			default: false,
			type: Boolean,
		},
		textOnly: {
			default: false,
			type: Boolean
		}
	}
}
</script>

<style>
@import "~@spectrum-css/quickaction/dist/index-vars.css";
</style>