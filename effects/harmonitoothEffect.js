import { ANIMATION_RATE } from '../../../src/constants'
import getHarmonicContinuumStripePositions from '../src/utilities/getHarmonicContinuumStripePositions'

export default {
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCount: 1,
			},
		},
		getStripePositions: getHarmonicContinuumStripePositions,
	},
	animationsPattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCount: p => p * ANIMATION_RATE,
			},
		},
	},
}
