<template>
	<li
		class="spectrum-SideNav-item"
		:class="classes"
	>
		<vnode-syringe class&="spectrum-SideNav-itemLink">
			<subslot :vnodes="routerLink()" />
		</vnode-syringe>

		<a
			:href="href"
			class="spectrum-SideNav-itemLink"
			v-if="textNodes().length"
		>
			<vnode-syringe class&="spectrum-SideNav-itemIcon">
				<subslot element="@SpIcon" />
			</vnode-syringe>
			<subslot :vnodes="textNodes()" />
		</a>

		<subslot element="@SpSideNavHeading" />

		<sp-side-nav>
			<subslot :element="self()" />
		</sp-side-nav>
	</li>
</template>

<script>
import Subslot from "vue-subslot"
import SpSideNav from "./SpSideNav"
import SpSideNavHeading from "./SpSideNavHeading"
import vnodeSyringe from "vue-vnode-syringe"
import SpIcon from "./SpIcon"

const SpSideNavItem = {
	name: "SpSideNavItem",
	components: {
		vnodeSyringe,
		Subslot,
		SpSideNav,
		SpSideNavHeading,
		SpIcon,
	},
	props: {
		selected: Boolean,
		disabled: Boolean,
		href: {
			type: String,
			default: "#"
		}
	},
	computed: {
		classes() {
			return {
				'is-selected': this.selected,
				'is-disabled': this.disabled
			}
		},
	},
	methods: {
		self() {
			return SpSideNavItem
		},
		routerLink() {
			return this.$slots.default.filter(vnode => vnode.componentOptions?.tag === "router-link")
		},
		textNodes() {
			return this.$slots.default.filter(vnode => !vnode.tag)
		}
	}

}

export default SpSideNavItem;
</script>

<style>

</style>