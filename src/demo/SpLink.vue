<template>
	<div>
		<demo-title>Pure (Primary)</demo-title>
		<sp-link>Privacy Policy</sp-link>

		<demo-title>Secondary</demo-title>
		<sp-link secondary>Privacy Policy</sp-link>

		<demo-title>Over background</demo-title>
		<div style="background-color: rgb(15, 121, 125); padding: 15px 20px; display: inline-block;">
			<p class="spectrum-Body" style="color: rgb(255, 255, 255);">
				Hello, this is my <sp-link over-background>spectrum-Link--overBackground</sp-link>. This is just filler text, but if you keep reading maybe something good will happen.
			</p>
		</div>

		<demo-title>Quiet</demo-title>
		<sp-link quiet>Privacy Policy</sp-link>
		
	</div>
</template>

<script>
export default {

}
</script>