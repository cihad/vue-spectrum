<template>
	<div>
		<page-title>sp-popover-trigger</page-title>

		<demo-title>Default</demo-title>
		<sp-popover-trigger placement="right-start">
			<sp-action-button>
				<sp-icon :icon="$options.components.Edit" />
			</sp-action-button>

			<sp-dialog>
				<sp-heading>sdasdad</sp-heading>
				<sp-divider />
				<sp-content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore incidunt dolor quibusdam voluptatibus quod dignissimos corporis facilis. Perferendis recusandae, magnam praesentium neque tempore qui deserunt ratione libero ducimus quibusdam!</sp-content>
			</sp-dialog>
		</sp-popover-trigger>
	</div>
</template>

<script>
import Edit from 'vue-spectrum-workflow-icons/dist/Edit'

export default {
	components: {
		Edit
	}
}
</script>

<style>

</style>