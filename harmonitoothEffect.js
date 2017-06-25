import { ANIMATION_RATE } from '../../constants'
import getHarmonicContinuumStripePositions from './getHarmonicContinuumStripePositions'

export default {
	state: {
		stripeCountConfig: {
			stripeCount: 1
		},
		getStripePositions: getHarmonicContinuumStripePositions
	},
	animations: {
		stripeCountConfig: {
			stripeCount: p => p * ANIMATION_RATE
		}
	}
}