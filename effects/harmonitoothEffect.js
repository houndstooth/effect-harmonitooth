import { ANIMATION_RATE } from '../../../src/constants'
import getHarmonicContinuumStripePositions from '../src/utilities/getHarmonicContinuumStripePositions'

export default {
	basePattern: {
		stripeCountSettings: {
			stripeCount: 1,
		},
		getStripePositions: getHarmonicContinuumStripePositions,
	},
	animationsPattern: {
		stripeCountSettings: {
			stripeCount: p => p * ANIMATION_RATE,
		},
	},
}
