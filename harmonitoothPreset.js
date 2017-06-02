export default {
	state: {
		stripeCountConfig: {
			stripeCount: 1
		},
		stripeStyle: 'FULL_HARMONIC_CONTINUUM_COMPRESSED_INTO_SINGLE_TILE'
	},
	iterations: {},
	animations: {
		stripeCountConfig: {
			stripeCount: p => p * 1.005
		}
	}
}
