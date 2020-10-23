<template>
	<div v-frag>
		<sp-underlay :open="isOpen" @click="underlayClickHandler" />

		<sp-modal :open="isOpen">
			<div
				class="spectrum-Dialog"
				:class="classes"
				role="dialog"
				tabindex="-1"
				aria-modal="true"
			>
				<div class="spectrum-Dialog-grid">
					<vnode-syringe class&="spectrum-Dialog-heading">
						<subslot element="@SpHeading" limit="1" />
					</vnode-syringe>

					<vnode-syringe class&="spectrum-Dialog-header">
						<subslot element="@SpHeader" limit="1" />
					</vnode-syringe>

					<vnode-syringe class&="spectrum-Dialog-divider" size="M">
						<subslot element="@SpDivider" limit="1" />
					</vnode-syringe>

					<vnode-syringe class&="spectrum-Dialog-content">
						<subslot element="@SpContent" />
					</vnode-syringe>

					<vnode-syringe class&="spectrum-Dialog-buttonGroup spectrum-Dialog-buttonGroup--noFooter">
						<subslot element="@SpButtonGroup" />
					</vnode-syringe>

					<vnode-syringe class&="spectrum-Dialog-footer">
						<subslot element="@SpFooter" />
					</vnode-syringe>

					<sp-action-button
						v-if="dismissable"
						class="spectrum-Dialog-closeButton"
						@click="closeDialog"
						aria-label="Dismiss"
						type="button"
						quiet
					>
						<sp-icon
							:icon="$options.components.CrossLarge"
							class="spectrum-UIIcon-CrossLarge"
							focusable="false"
							aria-hidden="true"
						/>
					</sp-action-button>

				</div>
			</div>
		</sp-modal>
	</div>
</template>

<script>
import frag from 'vue-frag';
import SpIcon from './SpIcon'
import CrossLarge from 'vue-spectrum-ui-icons/dist/CrossLarge'
import SpUnderlay from './SpUnderlay'
import SpModal from './SpModal'
import Subslot from 'vue-subslot';
import vnodeSyringe from 'vue-vnode-syringe'
import SpContent from './SpContent'
import SpHeading from './SpHeading'
import SpHeader from './SpHeader'
import SpDivider from './SpDivider'
import SpActionButton from './SpActionButton'
import SpButtonGroup from './SpButtonGroup'
import SpFooter from './SpFooter'

const sizeMap = {
	S: 'small',
	M: 'medium',
	L: 'large'
}

export default {
	name: "SpDialog",
	components: {
		vnodeSyringe,
		SpIcon,
		Subslot,
		SpUnderlay,
		SpModal,
		SpContent,
		SpHeader,
		SpHeading,
		SpDivider,
		SpActionButton,
		SpButtonGroup,
		SpFooter,
		CrossLarge,
	},
	directives: {
		frag
	},
	props: {
		open: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'S',
			validator(value) {
				return [
					'S',
					'M',
					'L'
				].indexOf(value) !== -1
			}
		},
		dismissable: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes() {
			return [
				`spectrum-Dialog--${sizeMap[this.size]}`,
				{
					'spectrum-Dialog--dismissable': this.dismissable
				}
			]
		},
		isOpen() {
			return this.open || this.triggerOpen
		}
	},
	methods: {
		closeDialog() {
			this.$emit('update:open', false)
		},
		underlayClickHandler() {
			if (!this.dismissable) return
			this.closeDialog()
		}
	}
}
</script>

<style>
@import "~@spectrum-css/dialog/dist/index-vars.css";
</style>