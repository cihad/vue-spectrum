<template>
	<div>
		<page-title>sp-list-box-section</page-title>

		<demo-title>Default</demo-title>
		<sp-list-box v-model="animal" style="width: 200px;">
			<sp-list-box-section title="Australian">
				<sp-list-box-item value="Kangaroo">Kangaroo</sp-list-box-item>
				<sp-list-box-item value="Koala">Koala</sp-list-box-item>
				<sp-list-box-item value="Platybus">Platybus</sp-list-box-item>
			</sp-list-box-section>
			<sp-list-box-section title="American">
				<sp-list-box-item value="Bald Eagle">Bald Eagle</sp-list-box-item>
				<sp-list-box-item value="Bison">Bison</sp-list-box-item>
				<sp-list-box-item value="Skunk">Skunk</sp-list-box-item>
			</sp-list-box-section>
		</sp-list-box>
	</div>
</template>

<script>
export default {
	data() {
		return {
			animal: "Cat",
		}
	}
}
</script>

<style>

</style>