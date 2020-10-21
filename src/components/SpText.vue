<template>
	<span v-bind="$attrs">
		<slot />
	</span>
</template>

<script>
export default {
	name: "SpText"
}
</script>