import { ANIMATION_RATE } from '../../../src/constants'
import getHarmonicContinuumStripePositions from '../src/utilities/getHarmonicContinuumStripePositions'

export default {
	initial: {
		stripeCountSettings: {
			stripeCount: 1,
		},
		getStripePositions: getHarmonicContinuumStripePositions,
	},
	animations: {
		stripeCountSettings: {
			stripeCount: p => p * ANIMATION_RATE,
		},
	},
}
