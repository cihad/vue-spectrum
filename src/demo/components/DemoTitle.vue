<template>
	<div class="demo-title">
		<sp-heading :level="3"><slot /></sp-heading>
		<sp-divider size="S" />
	</div>
</template>

<script>
export default {
	name: "DemoTitle"
}
</script>

<style scoped>
.demo-title {
	margin-top: 5em;
}
</style>