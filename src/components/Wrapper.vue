<template>
	<div>
		<header>
			<slot name="header" :deger="6" />
		</header>

		<section>
			<slot />
		</section>

		<footer>
			<component :is="getHeader()" />
		</footer>
	</div>
</template>

<script>
export default {
	mounted() {
		debugger // eslint-disable-line
	},
	methods: {
		getHeader() {
			const _this = this
			return {
				render() {
					return _this.$scopedSlots.header({ deger: 5 })[0]
				}
			}
		}
	}
}
</script>

<style scoped>
header, footer {
	color: red
}
</style>