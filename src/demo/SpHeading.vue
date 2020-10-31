<template>
	<div>
		<page-title>sp-heading</page-title>

		<demo-title>Default</demo-title>
		<sp-heading>Heading <em>Emphasis</em> <strong>Strong</strong>.</sp-heading>

		<demo-title>Interactive</demo-title>
		<sp-switch v-model="heavy">Heavy</sp-switch>
		<sp-switch v-model="light">Light</sp-switch>
		<sp-switch v-model="serif">Serif</sp-switch>
		<select v-model="size">
			<option></option>
			<option v-for="s in sizes" :key="s" :value="s">{{ s }}</option>
		</select>

		<select v-model="level">
			<option></option>
			<option v-for="l in 7" :key="l" :value="l">{{ l }}</option>
		</select>

		<sp-heading
			:level="level"
			:heavy="heavy"
			:serif="serif"
			:size="size"
			:light="light"
			contenteditable="">
			Heading <em>Emphasis</em> <strong>Strong</strong>.
		</sp-heading>
	</div>
</template>

<script>
import { sizes } from "../components/SpHeading"

export default {
	data() {
		return {
			sizes,
			size: null,
			level: 1,
			heavy: false,
			light: false,
			serif: false,
		}
	}
}
</script>

<style>

</style>