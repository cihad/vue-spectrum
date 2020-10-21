<template>
	<div>
		<demo-title>Icon-only</demo-title>
		<sp-quick-actions-overlay style="padding: 40px">
			<sp-quick-actions open>
				<sp-action-button>
					<sp-icon :icon="$options.components.Edit"></sp-icon>
				</sp-action-button>
				<sp-action-button>
					<sp-icon :icon="$options.components.Copy"></sp-icon>
				</sp-action-button>
				<sp-action-button>
					<sp-icon :icon="$options.components.Delete"></sp-icon>
				</sp-action-button>
			</sp-quick-actions>
		</sp-quick-actions-overlay>


		<demo-title>Text-only</demo-title>
		<sp-quick-actions-overlay style="padding: 40px">
			<sp-quick-actions open text-only>
				<sp-action-button>Edit</sp-action-button>
				<sp-action-button>Copy</sp-action-button>
				<sp-action-button>Delete</sp-action-button>
			</sp-quick-actions>
		</sp-quick-actions-overlay>
	</div>
</template>

<script>
import Edit from "vue-spectrum-workflow-icons/dist/Edit"
import Copy from "vue-spectrum-workflow-icons/dist/Copy"
import Delete from "vue-spectrum-workflow-icons/dist/Delete"

export default {
	components: {
		Edit,
		Copy,
		Delete,
	}
}
</script>