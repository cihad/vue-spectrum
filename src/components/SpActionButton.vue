<template>
	<button
		:class="classes"
		:type="type"
		@click="handleClick"
	>
		<vnode-syringe class&="spectrum-Icon" size="S">
			<subslot element="@SpIcon" />
		</vnode-syringe>
	
		<sp-text class="spectrum-ActionButton-label">
			<subslot :vnodes="$slots.default.filter(vnode => !vnode.tag)" />
		</sp-text>
	</button>
</template>

<script>
import SpText from './SpText'
import { wrapArray, compactArray } from '../utils/array'
import Subslot from 'vue-subslot'
import vnodeSyringe from 'vue-vnode-syringe'
import SpIcon from './SpIcon'
import { ProxiInject } from 'vue-proxi'

export default {
	name: "SpActionButton",
	mixins: [
		ProxiInject({
			from: 'sp-action-button',
			props: ['childQuiet']
		}),
	],
	components: {
		SpIcon,
		SpText,
		Subslot,
		vnodeSyringe,
	},
	props: {
		value: {
		},
		quiet: {
			default: false,
			type: Boolean
		},
		type: {
			default: 'button',
			type: String
		},
		selected: {
			default: false,
			type: Boolean
		},
		emphasized: {
			default: false,
			type: Boolean
		},
	},
	inject: {
		spActionButton: {
			default: () => ({ standalone: true })
		}
	},
	computed: {
		isSelected() {
			if (this.isInActionGroup()) {
				return this.spActionButton?.data?.value && this.value === this.spActionButton?.data?.value
			} else {
				return this.selected
			}
		},
		classes() {
			return [
				this.$$.class,
				'spectrum-ActionButton',
				{
					'spectrum-ActionButton--quiet': this.quiet || this.childQuiet,
					'spectrum-ActionButton--emphasized': this.emphasized,
					'is-selected': this.isSelected,
				},
			]
		}
	},
	methods: {
		handleClick(event) {
			this.$emit('click', event)
			if (!this.isInActionGroup()) return
			this.spActionButton.setValue(this.value)
		},
		isInActionGroup() {
			return !this.spActionButton?.standalone
		}
	}
}
</script>

<style>
@import "~@spectrum-css/button/dist/index-vars.css";
</style>