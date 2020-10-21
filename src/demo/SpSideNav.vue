<template>
	<div>
		<demo-title>Single Level</demo-title>
		<sp-side-nav>
			<sp-side-nav-item>Projects</sp-side-nav-item>
			<sp-side-nav-item disabled>Recents</sp-side-nav-item>
			<sp-side-nav-item>Libraries</sp-side-nav-item>
			<sp-side-nav-item>Shared</sp-side-nav-item>
		</sp-side-nav>

		<demo-title>Single Level with Headers</demo-title>
		<sp-side-nav>
			<sp-side-nav-item>Home</sp-side-nav-item>
			<sp-side-nav-item>Apps</sp-side-nav-item>
			<sp-side-nav-item>
				<sp-side-nav-heading>Storage</sp-side-nav-heading>
				<sp-side-nav-item>Document Cloud</sp-side-nav-item>
				<sp-side-nav-item>ABC Cloud</sp-side-nav-item>
			</sp-side-nav-item>
			<sp-side-nav-item>
				<sp-side-nav-heading>Shared</sp-side-nav-heading>
				<sp-side-nav-item>Send &amp; Track</sp-side-nav-item>
				<sp-side-nav-item>Reviews</sp-side-nav-item>
				<sp-side-nav-item>Signatures</sp-side-nav-item>
			</sp-side-nav-item>
		</sp-side-nav>

		<demo-title>Multilevel</demo-title>
		<sp-side-nav multilevel>
			<sp-side-nav-item>Guidelines</sp-side-nav-item>
			<sp-side-nav-item>
				Styles
				<sp-side-nav-item>Color</sp-side-nav-item>
				<sp-side-nav-item>
					Grid
					<sp-side-nav-item>Layout</sp-side-nav-item>
					<sp-side-nav-item>Responsive Grid</sp-side-nav-item>
				</sp-side-nav-item>
				<sp-side-nav-item>Typography</sp-side-nav-item>
			</sp-side-nav-item>
			<sp-side-nav-item>Comments</sp-side-nav-item>	
			<sp-side-nav-item>Patterns</sp-side-nav-item>	
		</sp-side-nav>

		<demo-title>Icon</demo-title>
		<sp-side-nav multilevel>
			<sp-side-nav-item>
				<sp-icon :icon="$options.components.Home" />
				Home
			</sp-side-nav-item>
			<sp-side-nav-item>
				<sp-icon :icon="$options.components.FileTxt" />
				Files
				<sp-side-nav-item>Recent</sp-side-nav-item>
				<sp-side-nav-item>Favorites</sp-side-nav-item>
				<sp-side-nav-item>Deleted</sp-side-nav-item>
			</sp-side-nav-item>
			<sp-side-nav-item>
				<sp-icon :icon="$options.components.Settings"></sp-icon>
				Settings
			</sp-side-nav-item>	
		</sp-side-nav>
	</div>
</template>

<script>
import Home from "vue-spectrum-workflow-icons/dist/Home"
import FileTxt from "vue-spectrum-workflow-icons/dist/FileTxt"
import Settings from "vue-spectrum-workflow-icons/dist/Settings"

export default {
	components: {
		Home,
		FileTxt,
		Settings,
	}
}
</script>