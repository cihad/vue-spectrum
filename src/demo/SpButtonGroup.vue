<template>
	<div>
		<demo-title>Horizontal</demo-title>
		<sp-button-group>
			<sp-button variant="secondary">Cancel</sp-button>
			<sp-button variant="cta">Submit</sp-button>
		</sp-button-group>

		<demo-title>Vertical</demo-title>
		<sp-button-group vertical>
			<sp-button variant="secondary">Cancel</sp-button>
			<sp-button variant="cta">Submit</sp-button>
		</sp-button-group>

		<demo-title>Disabled</demo-title>
		<sp-button-group disabled>
			<sp-button quiet>Cancel</sp-button>
			<sp-button variant="cta">Submit</sp-button>
		</sp-button-group>

		

		
	</div>
</template>

<script>
import Share from 'vue-spectrum-workflow-icons/dist/Share'

export default {
	components: {
		Share,
	}
}
</script>