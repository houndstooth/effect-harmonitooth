import { ANIMATION_RATE } from '../../application/constants'

export default {
	state: {
		stripeCountConfig: {
			stripeCount: 1
		},
		stripeStyle: 'FULL_HARMONIC_CONTINUUM_COMPRESSED_INTO_SINGLE_TILE'
	},
	animations: {
		stripeCountConfig: {
			stripeCount: p => p * ANIMATION_RATE
		}
	}
}
