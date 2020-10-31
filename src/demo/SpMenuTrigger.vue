<template>
	<div>
		<page-title>sp-menu-trigger</page-title>

		<demo-title>Default</demo-title>
		<sp-menu-trigger>
			<sp-action-button>Edit</sp-action-button>

			<sp-list-box>
				<sp-list-box-item>Cut</sp-list-box-item>
				<sp-list-box-item>Copy</sp-list-box-item>
				<sp-list-box-item>Paste</sp-list-box-item>
			</sp-list-box>
		</sp-menu-trigger>

		<demo-title>Close on selection</demo-title>
		<sp-menu-trigger :close-on-select="false">
			<sp-action-button>Edit</sp-action-button>

			<sp-list-box>
				<sp-list-box-item>Cut</sp-list-box-item>
				<sp-list-box-item>Copy</sp-list-box-item>
				<sp-list-box-item>Paste</sp-list-box-item>
			</sp-list-box>
		</sp-menu-trigger>

		<demo-title>Placement</demo-title>
		<sp-menu-trigger placement="top-end">
			<sp-action-button>Edit</sp-action-button>

			<sp-list-box>
				<sp-list-box-item>Cut</sp-list-box-item>
				<sp-list-box-item>Copy</sp-list-box-item>
				<sp-list-box-item>Paste</sp-list-box-item>
			</sp-list-box>
		</sp-menu-trigger>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>