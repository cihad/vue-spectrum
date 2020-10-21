<template>
	<ul
		class="spectrum-SideNav"
		:class="classes"
	>
		<slot />
	</ul>
</template>

<script>
export default {
	name: "SpSideNav",
	props: {
		multilevel: {
			default: false,
			type: Boolean
		}
	},
	computed: {
		classes() {
			return {
				'spectrum-SideNav--multiLevel': this.multilevel
			}
		}
	}
}
</script>

<style>
@import "~@spectrum-css/sidenav/dist/index-vars.css";
</style>