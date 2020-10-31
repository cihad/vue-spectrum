<template>
	<div>

		<input type="checkbox" v-model="show" />

		<cihad
			v-show="true"
			:show="show"
		>
			<sp-button v-show="false">cihad btn</sp-button>
		</cihad>
	</div>
</template>

<script>
import Vnode from './Vnode'

export default {
	name: 'Deneme',
	components: {
		Vnode,
		cihad: {
			props: ['show'],
			render(h) {
				const vnode = this.$scopedSlots.default()[0]

				return h(Vnode, {
					props: {
						vnode
					},
					directives: [
						{
							name: "show",
							value: this.show
						}
					],
					ref: "cihad"
				})
			},
			mounted() {
				// console.log('deneme refs', this.$refs)
			}
		}
	},
	data() {
		return {
			show: true
		}
	},
	mounted() {
		// console.log(this.$refs)
	}
}
</script>

<style>
</style>