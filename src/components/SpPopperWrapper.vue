<!--<template>
	<div>
		<slot name="trigger" :open="open" :close="close" :toggle="toggle" />

		<vnode-syringe v-show="show">
			<slot :close="close" />
		</vnode-syringe>
	</div>
</template>-->

<script>
import { createPopper } from '@popperjs/core';
import vnodeSyringe from 'vue-vnode-syringe';
import Vnode from './Vnode'

const isTargetInRef = (reference, target) => {
	return reference == target || reference.contains(target)
}

export default {	
	name: "SpPopperWrapper",
	props: {
		placement: {
			default: 'bottom-start',
			type: String,
			validator(value) {
				return [
					'auto',
					'auto-start',
					'auto-end',
					'top',
					'top-start',
					'top-end',
					'bottom',
					'bottom-start',
					'bottom-end',
					'right',
					'right-start',
					'right-end',
					'left',
					'left-start',
					'left-end',
				].indexOf(value) !== -1
			}
		},
		offset: {
			default() {
				return [0, 6]
			}
		},
	},
	data() {
		return {
			show: false,
			popper: null,
			triggerSlots: null,
			defaultSlots: null,
		}
	},
	mounted() {
		const { offset, placement } = this

		// debugger // eslint-disable-line

		const modifiers = [
			{
				name: 'offset',
				options: { offset },
			},
			{
				name: 'computeStyles',
				options: {
					adaptive: false,
				}
			}
		]

		this.popper = createPopper(
			this.$children[0].$el,
			this.$children[1].$el,
			{	
				modifiers,
				placement,
			},
		)
	},
	watch: {
		placement() {
			this.popper.setOptions({
				placement: this.placement
			})
		},
		show(newValue) {
			const self = this
			this.$nextTick(() => self.popper.update())
		},
	},
	methods: {
		open() {
			this.show = true
		},
		close(event) {
			const { reference } = this.popper.state.elements
			const target = event?.target

			if (event && isTargetInRef(reference, target)) return

			this.show = false
		},
		toggle() {
			this.show = !this.show
		},
	},
	render(h) {
		const { open, close, toggle, show } = this

		const defaultSlots = this.defaultSlots = this.$scopedSlots.default({open,close,toggle,show})
		const triggerSlots = this.triggerSlots = this.$scopedSlots.trigger({open,close,toggle,show})

		
		return h('div',
			[
				...triggerSlots,
				h(Vnode, {
					props: {
						vnode: defaultSlots[0]
					},
					style: {
						visibility: this.show ? 'visible' : 'hidden'
					},
				}),
			]
		);
	}
}
</script>

<style>
</style>