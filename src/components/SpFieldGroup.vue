<template>
	<div
		class="spectrum-FieldGroup"
		:class="[`spectrum-FieldGroup--${vertical ? 'vertical' : 'horizontal'}`]"
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
		vertical: {
			type: Boolean,
			default: false,
		}
	},
}
</script>

<style>
@import "~@spectrum-css/fieldgroup/dist/index-vars.css";
</style>