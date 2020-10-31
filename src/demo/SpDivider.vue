<template>
	<div>
		<page-title>sp-divider</page-title>

		<demo-title>Large</demo-title>
		<sp-heading size="M">Heading</sp-heading>
		<sp-divider />
		<p class="spectrum-Body">Page or Section Titles.</p>

		<demo-title>Medium</demo-title>
		<sp-heading size="S">Heading</sp-heading>
		<sp-divider size="M" />
		<p class="spectrum-Body">Divide subsections, or divide different groups of elements (between panels, rails, etc.)</p>

		<demo-title>Small</demo-title>
		<sp-heading size="XS">Heading</sp-heading>
		<sp-divider size="S" />
		<p>Divide like-elements (tables, tool groups, elements within a panel, etc.)</p>

		<demo-title>Vertical</demo-title>
		<div style="display: flex; gap: 10px;">
			<sp-text>Content left</sp-text>
			<sp-divider vertical style="align-self: stretch;" />
			<sp-text>Content right</sp-text>
		</div>

		<demo-title>Vertical</demo-title>
		<sp-button-group>
			<sp-action-button quiet>
				<sp-icon :icon="$options.components.Properties" />
			</sp-action-button>
			<sp-divider vertical size="S" style="height: auto; align-self: stretch;" />
			<sp-action-button quiet>
				<sp-icon :icon="$options.components.Select" />
			</sp-action-button>
		</sp-button-group>
	</div>
</template>

<script>
import Properties from 'vue-spectrum-workflow-icons/dist/Properties'
import Select from 'vue-spectrum-workflow-icons/dist/Select'

export default {
	components: {
		Properties,
		Select,
	}
}
</script>

<style>

</style>