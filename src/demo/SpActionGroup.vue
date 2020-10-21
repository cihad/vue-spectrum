<template>
	<div>
		<demo-title>Only text</demo-title>
		<sp-action-group>
			<sp-action-button>Edit</sp-action-button>
			<sp-action-button>Copy</sp-action-button>
			<sp-action-button>Delete</sp-action-button>
			<sp-action-button>More</sp-action-button>
		</sp-action-group>

		
		<demo-title>Icon and text</demo-title>
		<sp-action-group>
			<sp-action-button>
				<sp-icon :icon="$options.components.Edit" />
				Edit
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Copy" />	
				Copy
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Delete" />
				Delete
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.More" />
			</sp-action-button>
		</sp-action-group>

		
		<demo-title>Justified</demo-title>
		<sp-action-group justified>
			<sp-action-button>
				<sp-icon :icon="$options.components.Edit" />
				Edit
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Copy" />	
				Copy
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Delete" />
				Delete
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.More" />
			</sp-action-button>
		</sp-action-group>

		<demo-title>Quiet and compact</demo-title>
		<sp-action-group quiet compact>
			<sp-action-button>
				<sp-icon :icon="$options.components.Edit" />
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Copy" />	
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Delete" />
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.More" />
			</sp-action-button>
		</sp-action-group>

		
		<demo-title>Quiet and vertical</demo-title>
		<sp-action-group quiet vertical>
			<sp-action-button>
				<sp-icon :icon="$options.components.Edit" />
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Copy" />	
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Delete" />
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.More" />
			</sp-action-button>
		</sp-action-group>

			<demo-title>Compact</demo-title>
		<sp-action-group compact>
			<sp-action-button>
				<sp-icon :icon="$options.components.Edit" />
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Copy" />	
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.Delete" />
			</sp-action-button>
			<sp-action-button>
				<sp-icon :icon="$options.components.More" />
			</sp-action-button>
		</sp-action-group>
	</div>
</template>

<script>
import DemoTitle from './components/DemoTitle'

import Edit from 'vue-spectrum-workflow-icons/dist/Edit'
import Copy from 'vue-spectrum-workflow-icons/dist/Copy'
import Delete from 'vue-spectrum-workflow-icons/dist/Delete'
import More from 'vue-spectrum-workflow-icons/dist/More'

export default {	
	components: {
		DemoTitle,
		Edit,
		Copy,
		Delete,
		More,
	}
}
</script>

<style>

</style>