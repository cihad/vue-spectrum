<template>
	<div>
		<page-title>sp-list-box-item</page-title>

		<demo-title>Default</demo-title>
		<sp-list-box>
			<sp-list-box-item>Left</sp-list-box-item>
			<sp-list-box-item>Middle</sp-list-box-item>
			<sp-list-box-item>Right</sp-list-box-item>
		</sp-list-box>
		
		<demo-title>v-model</demo-title>
		<sp-list-box v-model="animal" style="width: 200px;">
			<sp-list-box-item value="Aardvark">Aardvark</sp-list-box-item>
			<sp-list-box-item value="Cat">Cat</sp-list-box-item>
			<sp-list-box-item value="Dog">Dog</sp-list-box-item>
			<sp-list-box-item value="Kangaroo">Kangaroo</sp-list-box-item>
			<sp-list-box-item value="Koala">Koala</sp-list-box-item>
			<sp-list-box-item value="Penguin">Penguin</sp-list-box-item>
			<sp-list-box-item value="Snake">Snake</sp-list-box-item>
			<sp-list-box-item value="Turtle">Turtle</sp-list-box-item>
<sp-list-box-item value="Womba">Womba</sp-list-box-item>
		</sp-list-box>

		<br>
		You have selected animal: {{ animal }}


		<demo-title>v-model (multiple select)</demo-title>
		<sp-list-box v-model="animals" style="width: 200px;">
			<sp-list-box-item value="Aardvark">Aardvark</sp-list-box-item>
			<sp-list-box-item value="Cat">Cat</sp-list-box-item>
			<sp-list-box-item value="Dog">Dog</sp-list-box-item>
			<sp-list-box-item value="Kangaroo">Kangaroo</sp-list-box-item>
			<sp-list-box-item value="Koala">Koala</sp-list-box-item>
			<sp-list-box-item value="Penguin">Penguin</sp-list-box-item>
			<sp-list-box-item value="Snake">Snake</sp-list-box-item>
			<sp-list-box-item value="Turtle">Turtle</sp-list-box-item>
			<sp-list-box-item value="Womba">Womba</sp-list-box-item>
		</sp-list-box>

		<br>
		You have selected animal: {{ animals.join(', ') }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			animal: "Cat",
			animals: ['Cat']
		}
	}
}
</script>

<style>

</style>