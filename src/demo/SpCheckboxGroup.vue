<template>
	<div>
		<demo-title>Pure</demo-title>
		<sp-checkbox-group label="Interests">
			<sp-checkbox value="Illustration">Illustration</sp-checkbox>
			<sp-checkbox value="Photography">Photography</sp-checkbox>
			<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
		</sp-checkbox-group>

		<demo-title>v-model</demo-title>
		<sp-checkbox-group label="Interests" v-model="interests">
			<sp-checkbox value="Illustration">Illustration</sp-checkbox>
			<sp-checkbox value="Photography">Photography</sp-checkbox>
			<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
		</sp-checkbox-group>
		<br>
		You have selected: {{ interests.join(', ') }}

		<demo-title>Labeling</demo-title>
		<div style="display: flex; flex-wrap: wrap; gap: 24px;">
			<sp-checkbox-group label="Interests" v-model="interests">
				<sp-checkbox value="Illustration">Illustration</sp-checkbox>
				<sp-checkbox value="Photography">Photography</sp-checkbox>
				<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
			</sp-checkbox-group>

			<sp-checkbox-group label="Interests" v-model="interests" required necessity-indicator="icon">
				<sp-checkbox value="Illustration">Illustration</sp-checkbox>
				<sp-checkbox value="Photography">Photography</sp-checkbox>
				<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
			</sp-checkbox-group>

			<sp-checkbox-group label="Interests" v-model="interests" required>
				<sp-checkbox value="Illustration">Illustration</sp-checkbox>
				<sp-checkbox value="Photography">Photography</sp-checkbox>
				<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
			</sp-checkbox-group>

			<sp-checkbox-group label="Interests" v-model="interests" necessity-indicator="label">
				<sp-checkbox value="Illustration">Illustration</sp-checkbox>
				<sp-checkbox value="Photography">Photography</sp-checkbox>
				<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
			</sp-checkbox-group>
		</div>

		<demo-title>Validation State</demo-title>
		TODO

		<demo-title>Horizontal</demo-title>
		<sp-checkbox-group
			label="Interests"
			v-model="interests"
			orientation="horizontal"
		>
			<sp-checkbox value="Illustration">Illustration</sp-checkbox>
			<sp-checkbox value="Photography">Photography</sp-checkbox>
			<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
		</sp-checkbox-group>

		<demo-title>Label position and alignment</demo-title>
		TODO

		<demo-title>Disabled</demo-title>
		<div style="display: flex; flex-wrap: wrap; gap: 24px;">
			<sp-checkbox-group
				label="Interests"
				v-model="interests"
				disabled
			>
				<sp-checkbox value="Illustration">Illustration</sp-checkbox>
				<sp-checkbox value="Photography">Photography</sp-checkbox>
				<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
			</sp-checkbox-group>

			<sp-checkbox-group
				label="Interests"
				v-model="interests"
			>
				<sp-checkbox value="Illustration">Illustration</sp-checkbox>
				<sp-checkbox value="Photography" disabled>Photography</sp-checkbox>
				<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
			</sp-checkbox-group>
		</div>

		<demo-title>Read only</demo-title>
		TODO

		<demo-title>Emphasized</demo-title>
		<sp-checkbox-group
			label="Interests"
			v-model="interests"
			emphasized
		>
			<sp-checkbox value="Illustration">Illustration</sp-checkbox>
			<sp-checkbox value="Photography">Photography</sp-checkbox>
			<sp-checkbox value="UI/UX Design">UI/UX Design</sp-checkbox>
		</sp-checkbox-group>
	</div>
</template>

<script>
import Deneme from '../components/Deneme'

export default {
	data() {
		return {
			interests: ['Photography'],
		}
	}
}
</script>