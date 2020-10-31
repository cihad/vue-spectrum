<template>
	<div>
		<page-title>sp-icon</page-title>

		<demo-title>Default</demo-title>
		<sp-icon :icon="$options.components.Airplane"></sp-icon>

		<demo-title>Sizing</demo-title>
		<sp-icon :icon="$options.components.Beaker" size="XXS" />
		<sp-icon :icon="$options.components.Beaker" size="XS" />
		<sp-icon :icon="$options.components.Beaker" size="S" />
		<sp-icon :icon="$options.components.Beaker" size="M" />
		<sp-icon :icon="$options.components.Beaker" size="L" />
		<sp-icon :icon="$options.components.Beaker" size="XL" />
		<sp-icon :icon="$options.components.Beaker" size="XXL" />

		<demo-title>Coloring</demo-title>
		TODO

		<demo-title>Labeling</demo-title>
		TODO

		<demo-title>Available icons</demo-title>
		A <sp-link href="https://spectrum.adobe.com/page/icons/">searchable list of workflow icons</sp-link> is available on the Spectrum website. The name of the icon without any whitespace matches the import in React Spectrum.
	</div>
</template>

<script>
import Airplane from 'vue-spectrum-workflow-icons/dist/Airplane'
import Beaker from 'vue-spectrum-workflow-icons/dist/Beaker'

export default {
	components: {
		Airplane,
		Beaker,
	}
}
</script>

<style>

</style>