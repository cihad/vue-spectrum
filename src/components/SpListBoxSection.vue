<template>
	<div role="presentation">
		<div class="spectrum-Menu-divider" v-if="showDivider"></div>
		<span
			class="spectrum-Menu-sectionHeading"
			aria-hidden="true"
		>
			{{ title }}
		</span>

		<div class="spectrum-Menu">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "SpListBoxSection",
	props: {
		title: {
			required: true,
			type: String
		}
	},
	inject: {
		spListBoxSection: {
			default: () => ({ standalone: false, isFirst: false })
		}
	},
	computed: {
		showDivider() {
			return !this.spListBoxSection.standalone && !this.isFirst
		},
		isFirst() {
			return this.spListBoxSection?.isFirst(this)
		}
	}
}
</script>