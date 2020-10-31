<template>
	<div v-frag>
		<vnode-syringe
			@click="toggle"
		>
			<subslot
				:vnodes="vnodes"
				:element="['@SpActionButton', '@SpButton', '@SpLink']"
				limit="1"
			/>
		</vnode-syringe>

		<mounting-portal mountTo="body" append>
			<sp-provider>
				<sp-underlay :open="componentOpen" @click="underlayClickHandler" />

				<sp-modal
					:open="componentOpen"
					:fullscreen="fullscreen"
					:takeover="takeover"
				>
					<vnode-syringe
						:open="componentOpen"
						@update:open="componentOpen = $event"
						:dismissable="dismissable"
						:fullscreen="fullscreen"
						:takeover="takeover"
					>
						<subslot
							:vnodes="vnodes"
							element="@SpDialog"
						/>
					</vnode-syringe>
				</sp-modal>
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
import SpButton from './SpButton'
import SpLink from './SpLink'
import SpDialog from './SpDialog'
import SpModal from './SpModal'
import SpUnderlay from './SpUnderlay'
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
		SpButton,
		SpLink,
		SpDialog,
		SpUnderlay,
		SpModal,
		MountingPortal,
		SpHeading,
	},
	directives: {
		frag
	},
	props: {
		open: {
			type: Boolean,
			default: false
		},
		fullscreen: {
			type: Boolean,
			default: false
		},
		takeover: {
			type: Boolean,
			default: false,
		},
		dismissable: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
			componentOpen: this.open
		}
	},
	computed: {
		vnodes() {
			const { toggle, close } = this
			return this.$scopedSlots.default({ close, toggle })
		},
	},
	watch: {
		componentOpen(newValue) {
			this.$emit('update:open', newValue)
		},
	},
	methods: {
		toggle() {
			this.componentOpen = !this.componentOpen
		},
		close() {
			this.componentOpen = false
			this.$emit('update:open', false)
		},
		underlayClickHandler() {
			if (!this.dismissable) return
			this.close()
		},
	}
}
</script>

<style>

</style>