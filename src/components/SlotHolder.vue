<script>
import mergeData from 'vue-merge-data'

export default {
	name: 'SlotHolder',
	props: {
		vnode: {
			required: true
		}
	},
	render(h) {
		// debugger // eslint-disable-line
		// mergeData(this.vnode.data, {
		// 	attrs: this.$attrs,
		// 	on: this.$listeners,
		// 	props: this.$props,
		// })

		return this.vnode
	}
}
</script>