<template>
	<sp-popper-wrapper :placement="placement">
		<template #trigger="{ toggle }">
			<vnode-syringe @click="toggle" :class="{ 'is-active': true }">
				<subslot name="trigger" />
			</vnode-syringe>
		</template>

		<template #default="{ close }">
			<sp-popover v-click-outside="close">
				<vnode-syringe @selection-change="closeHandler(close)">
					<subslot />
				</vnode-syringe>
			</sp-popover>
		</template>
	</sp-popper-wrapper>
</template>

<script>
import SpPopperWrapper from './SpPopperWrapper'
import vnodeSyringe from 'vue-vnode-syringe';
import Subslot from 'vue-subslot';
import SpPopover from './SpPopover'
import vClickOutside from 'v-click-outside'

import SpButton from './SpButton'
import SpActionButton from './SpActionButton'
import SpLink from './SpLink'

export default {
	name: 'SpMenuTrigger',
	components: {
		Subslot,
		vnodeSyringe,
		SpPopperWrapper,
		SpPopover,
		SpButton,
		SpActionButton,
		SpLink,
	},
	mixins: [
		Subslot.define({
			trigger: {
				element: ['@SpButton', '@SpActionButton', '@SpLink'],
				limit: 1,
			},
		}),
	],
	directives: {
		clickOutside: vClickOutside.directive
	},
	props: {
		closeOnSelect: {
			default: true,
			type: Boolean
		},
		placement: {
			type: String,
			string: 'bottom-start',
		}
	},
	methods: {
		closeHandler(close) {
			if (this.closeOnSelect) setTimeout(() => {
				close()
			}, 100)
		},
	}
}
</script>