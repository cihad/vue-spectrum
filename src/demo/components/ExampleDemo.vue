<template>
	<div>
		<highlight language="html" :code="code" />

		<sp-provider>
			<slot />
		</sp-provider>
	</div>
</template>

<script>
import Highlight from './Highlight'
import SpProvider from '../components/SpProvider'

export default {
	components: {
		Highlight,
		SpProvider,
	},
	props: {
		language: {
			type: String,
			default: "vue"
		},
		code: {
			type: String
		}
	},
}
</script>

<style>
</style>