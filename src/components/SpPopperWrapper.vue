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

export default {	
	name: "SpPopperWrapper",
	components: {
		vnodeSyringe
	},
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
		}
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
		this.popper = createPopper(
			this.triggerSlots[0].elm,
			this.defaultSlots[0].elm,
			{	
				placement: this.placement,
				modifiers: [
					{
						name: 'offset',
						options: {
							offset: [0, 6],
						},
					},
					{
						name: 'computeStyles',
						options: {
							adaptive: false
						},
					},
				],
			},
		)
	},
	watch: {
		placement() {
			this.popper.setOptions({
				placement: this.placement
			})
		}
	},
	methods: {
		open() {
			this.show = true
		},
		close(event) {
			// debugger // eslint-disable-line
			if (event && this.popper.state.elements.reference == event.target) return
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
				h(
					'div',
					{
						directives: [
							{
								name: 'show',
								value: this.show,
								expression: 'show'
							}
						]
					},
					[...defaultSlots]
				)
			]
		);
	}
}
</script>

<style>
</style>