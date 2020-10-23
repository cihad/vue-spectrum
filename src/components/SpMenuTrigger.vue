<template>
	<sp-popper-wrapper>
		<template #trigger="{ toggle }">
			<vnode-syringe @click="toggle" :class="{ 'is-active': true }">
				<slot name="trigger" />
			</vnode-syringe>
		</template>

		<template #default="{ close }">
			<sp-popover v-click-outside="close">
				<vnode-syringe @selection-change="closeHandler(close)">
					<slot />
				</vnode-syringe>
			</sp-popover>
		</template>
	</sp-popper-wrapper>
</template>

<script>
import SpPopperWrapper from './SpPopperWrapper'
import vnodeSyringe from 'vue-vnode-syringe';
import SpPopover from './SpPopover'
import vClickOutside from 'v-click-outside'

export default {
	name: 'SpMenuTrigger',
	components: {
		SpPopperWrapper,
		SpPopover,
		vnodeSyringe
	},
	directives: {
		clickOutside: vClickOutside.directive
	},
	props: {
		closeOnSelect: {
			default: true,
			type: Boolean
		}
	},
	methods: {
		closeHandler(close) {
			if (this.closeOnSelect) setTimeout(() => {
				close()
			}, 100)
		}
	}
}
</script>