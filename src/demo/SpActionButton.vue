<template>
	<div>
		<sp-heading serif size="XXL">sp-action-button</sp-heading>

		<demo-title>Only label</demo-title>
		<sp-action-button>Edit</sp-action-button>

		<demo-title>Only Icon</demo-title>
		<sp-action-button>
			<sp-icon :icon="$options.components.Edit" />
		</sp-action-button>

		<demo-title>Label + Icon</demo-title>
		<sp-action-button>
			<sp-icon :icon="$options.components.Edit" />
			Edit
		</sp-action-button>

		<demo-title>Quiet</demo-title>
		<sp-action-button quiet>
			<sp-icon :icon="$options.components.Edit" />
			Edit
		</sp-action-button>

		<demo-title>Selected</demo-title>
		<sp-action-button selected>
			<sp-icon :icon="$options.components.Edit" />
			Edit
		</sp-action-button>

		<demo-title>Emphasized + Selected</demo-title>
		<sp-action-button emphasized selected>
			<sp-icon :icon="$options.components.Edit" />
			Edit
		</sp-action-button>

		<demo-title>Disabled</demo-title>
		<sp-action-button disabled>
			<sp-icon :icon="$options.components.Edit" />
			Edit
		</sp-action-button>
	</div>
</template>

<script>
import Edit from 'vue-spectrum-workflow-icons/dist/Edit'

export default {
	components: {
		Edit,
	},
	data() {
		return {
			value: '123'
		}
	}
}
</script>