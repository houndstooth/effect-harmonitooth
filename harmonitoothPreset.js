export default {
	state: {
		shared: {
			stripeCount: {
				baseCount: 1
			},
			stripeStyle: 'FULL_HARMONIC_CONTINUUM_COMPRESSED_INTO_SINGLE_TILE'
		}
	},
	iterations: {},
	animations: {
		shared: {
			stripeCount: {
				baseCount: p => p * 1.005
			}
		}
	}
}
