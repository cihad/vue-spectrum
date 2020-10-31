<template>
	<div>
		<page-title>sp-popover</page-title>

		<demo-title>Default (with sp-list-box)</demo-title>
		<sp-popover>
			<sp-list-box>
				<sp-list-box-item>Edit</sp-list-box-item>
				<sp-list-box-item>Copy</sp-list-box-item>
				<sp-list-box-item>Delete</sp-list-box-item>
			</sp-list-box>
		</sp-popover>

		<div style="height: 100px;"></div>

		<demo-title>With tip (bottom direction)</demo-title>
		<sp-popover tip direction="bottom">
			<sp-dialog>
				<sp-heading>Popover Title</sp-heading>
				<sp-divider></sp-divider>
				<sp-content>
					Cupcake ipsum dolor sit amet jelly beans. Chocolate jelly caramels. Icing soufflé chupa chups donut cheesecake. Jelly-o chocolate cake sweet roll cake danish candy biscuit halvah.
				</sp-content>
			</sp-dialog>
		</sp-popover>
		
		<div style="height: 240px;"></div>

		<demo-title>With tip (right direction)</demo-title>
		<sp-popover tip direction="right">
			<sp-dialog>
				<sp-heading>Popover Title</sp-heading>
				<sp-divider></sp-divider>
				<sp-content>
					Cupcake ipsum dolor sit amet jelly beans. Chocolate jelly caramels. Icing soufflé chupa chups donut cheesecake. Jelly-o chocolate cake sweet roll cake danish candy biscuit halvah.
				</sp-content>
			</sp-dialog>
		</sp-popover>
		
		<div style="height: 240px;"></div>


		<demo-title>With tip (left direction)</demo-title>
		<sp-popover tip direction="left">
			<sp-dialog>
				<sp-heading>Popover Title</sp-heading>
				<sp-divider></sp-divider>
				<sp-content>
					Cupcake ipsum dolor sit amet jelly beans. Chocolate jelly caramels. Icing soufflé chupa chups donut cheesecake. Jelly-o chocolate cake sweet roll cake danish candy biscuit halvah.
				</sp-content>
			</sp-dialog>
		</sp-popover>
		
		<div style="height: 240px;"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>