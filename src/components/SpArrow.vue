<template>
	<svg
		:width="Math.ceil(landscape ? secondary : primary)"
		:height="Math.ceil(landscape ? primary : secondary)"
		ref="svg"
	>
      <path class="spectrum-Popover-tip-triangle" :d="pathData.join(' ')" />
    </svg>
</template>

<script>
const ROOT_2 = Math.sqrt(2);

export default {
	name: "SpArrow",
	props: {
		direction: {
			type: String,
		},
		size: {
			type: Number,
			default: 20
		},
		borderWidth: {
			type: Number,
			default: 1
		}
	},

	data() {
		return {
			componentSize: this.size,
			componentBorderWidth: this.borderWidth,
		}
	},
	beforeMount() {
		const { svg } = this.$refs

		if (!svg) return

		let spectrumTipWidth = window.getComputedStyle(svg)
			.getPropertyValue('--spectrum-popover-tip-size')
		if (spectrumTipWidth !== '') {
			this.componentSize = parseInt(spectrumTipWidth, 10) / 2
		}

		let spectrumBorderWidth = window.getComputedStyle(svg)
			.getPropertyValue('--spectrum-popover-tip-borderWidth')
		if (spectrumBorderWidth !== '') {
			this.componentBorderWidth = parseInt(spectrumBorderWidth, 10)
		}
	},
	computed: {
		landscape() {
			return this.direction === 'top' || this.direction === 'bottom'
		},
		mirror() {
			return this.direction === 'left' || this.direction === 'top'
		},
		borderDiagonal() {
			return this.componentBorderWidth * ROOT_2;
		},
		halfBorderDiagonal() {
			return this.borderDiagonal / 2
		},
		secondary() {
			return 2 * this.componentSize + 2 * this.borderDiagonal
		},
		primary() {
			return this.componentSize + this.borderDiagonal
		},
		primaryStart() {
			return this.mirror ? this.primary : 0
		},
		primaryEnd() {
			return this.mirror ? this.halfBorderDiagonal : this.primary - this.halfBorderDiagonal
		},
		secondaryStart() {
			return this.halfBorderDiagonal
		},
		secondaryMiddle() {
			return this.secondary / 2
		},
		secondaryEnd() {
			return this.secondary - this.halfBorderDiagonal
		},
		pathData() {
			return this.landscape ? [
				'M', this.secondaryStart, this.primaryStart,
				'L', this.secondaryMiddle, this.primaryEnd,
				'L', this.secondaryEnd, this.primaryStart
			] : [
				'M', this.primaryStart, this.secondaryStart,
				'L', this.primaryEnd, this.secondaryMiddle,
				'L', this.primaryStart, this.secondaryEnd
			]
		}
	},
	methods: {

	}
}
</script>

<style>

</style>