<template>
	<div>
		<page-title>sp-toggle-button</page-title>

		<demo-title>Default</demo-title>
		<sp-toggle-button>Pin</sp-toggle-button>

		<demo-title>Label + Icon</demo-title>
		<sp-toggle-button>
			<sp-icon :icon="$options.components.PinOff"></sp-icon>
			Icon + Label
		</sp-toggle-button>

		<demo-title>Icon-only</demo-title>
		<sp-toggle-button>
			<sp-icon :icon="$options.components.PinOff"></sp-icon>
		</sp-toggle-button>

		<demo-title>Emphasized</demo-title>
		<sp-toggle-button emphasized>
			<sp-icon :icon="$options.components.PinOff"></sp-icon>
		</sp-toggle-button>

		<demo-title>Quiet</demo-title>
		<sp-toggle-button quiet>
			Pin
		</sp-toggle-button>
	</div>
</template>

<script>
import PinOff from 'vue-spectrum-workflow-icons/dist/PinOff'

export default {
	components: {
		PinOff,
	},
}
</script>