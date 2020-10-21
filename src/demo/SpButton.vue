<template>
	<div>
		<demo-title>Pure</demo-title>
		<sp-button>Action</sp-button>

		<demo-title>Primary variant</demo-title>
		<sp-button variant="primary">Action</sp-button>
	
		<demo-title>Secondary variant</demo-title>
		<sp-button variant="secondary">Action</sp-button>

		<demo-title>Call to action variant</demo-title>
		<sp-button variant="cta">Action</sp-button>

		<demo-title>Negative variant</demo-title>
		<sp-button variant="warning">Action</sp-button>
		
		<demo-title>Over background</demo-title>
		<div style="background-color: rgb(15, 121, 125); color: rgb(15, 121, 125); padding: 15px 20px; display: inline-block;">
			<sp-button over-background>Action</sp-button>
			<sp-button over-background disabled>Action</sp-button>
		</div>

		<demo-title>Over background (quiet)</demo-title>
		<div style="background-color: rgb(15, 121, 125); color: rgb(15, 121, 125); padding: 15px 20px; display: inline-block;">
			<sp-button over-background quiet>Action</sp-button>
			<sp-button over-background quiet disabled>Action</sp-button>
		</div>

		<demo-title>Icon</demo-title>
		<sp-button variant="cta">
			<sp-icon :icon="$options.components.Share"></sp-icon>
			Share
		</sp-button>

		<sp-button variant="primary">
			<sp-icon :icon="$options.components.Share"></sp-icon>
			Share
		</sp-button>

		<sp-button variant="primary" quiet>
			<sp-icon :icon="$options.components.Share"></sp-icon>
			Share
		</sp-button>

		
	</div>
</template>

<script>
import Share from 'vue-spectrum-workflow-icons/dist/Share'

export default {
	components: {
		Share,
	},
	data() {
		return {
			value: '123'
		}
	}
}
</script>