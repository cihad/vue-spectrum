<template>
	<div
		class="spectrum-FieldGroup"
		:class="[`spectrum-FieldGroup--${this.orientation}`]"
	>
		<vnode-syringe class&="spectrum-FieldGroup-item">
			<slot />
		</vnode-syringe>
	</div>
</template>

<script>
import vnodeSyringe from 'vue-vnode-syringe';

export default {
	name: "SpFieldGroup",
	components: {
		vnodeSyringe
	},
	props: {
		orientation: {
			type: String,
			default: 'vertical',
			validator(value) {
				return [
					'vertical',
					'horizontal'
				].indexOf(value) !== -1
			}
		}
	},
}
</script>

<style>
@import "~@spectrum-css/fieldgroup/dist/index-vars.css";
</style>