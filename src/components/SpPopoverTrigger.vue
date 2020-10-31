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
import SpArrow from './SpArrow'
import Subslot from 'vue-subslot'
import vnodeSyringe from 'vue-vnode-syringe'
import SpButton from './SpButton'
import SpActionButton from './SpActionButton'
import SpLink from './SpLink'
import vClickOutside from 'v-click-outside'


export default {
	name: "SpPopoverTrigger",
	components: {
		SpPopperWrapper,
		SpArrow,
		Subslot,
		vnodeSyringe,
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
		placement: {
			type: String,
			default: 'bottom',
		}
	}
}
</script>

<style>

</style>