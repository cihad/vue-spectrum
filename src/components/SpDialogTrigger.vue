<template>
	<div v-frag>
		<vnode-syringe
			@click="toggle"
		>
			<subslot element="@SpActionButton" limit="1" />
		</vnode-syringe>

		<mounting-portal mountTo="body" append>
			<sp-provider>
				<vnode-syringe
					:open="open"
					@update:open="open = $event"
				>
					<subslot element="@SpDialog" />
				</vnode-syringe>
			</sp-provider>
		</mounting-portal>
	</div>
</template>

<script>
import vnodeSyringe from 'vue-vnode-syringe'
import Subslot from 'vue-subslot'
import frag from 'vue-frag';
import SpProvider from './SpProvider'
import SpActionButton from './SpActionButton'
import SpDialog from './SpDialog'
import PortalVue from 'portal-vue'
import { PortalTarget, MountingPortal } from 'portal-vue'
import SpHeading from './SpHeading'

export default {
	name: "SpDialogTrigger",
	components: {
		vnodeSyringe,
		Subslot,
		SpProvider,
		SpActionButton,
		SpDialog,
		MountingPortal,
		SpHeading,
	},
	directives: {
		frag
	},
	data() {
		return {
			open: false
		}
	},
	created() {
		
	},
	methods: {
		toggle() {
			this.open = !this.open
		},
		close() {
			this.open = false
		}
	}
}
</script>

<style>

</style>