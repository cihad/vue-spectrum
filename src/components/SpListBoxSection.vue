<template>
	<div role="presentation">
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
	}
}
</script>