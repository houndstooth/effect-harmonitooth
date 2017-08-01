import { ANIMATION_RATE } from '../../../src/constants'
import getHarmonicContinuumStripePositions from '../src/utilities/getHarmonicContinuumStripePositions'

export default {
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCountSetting: 1,
				getStripePositions: getHarmonicContinuumStripePositions,
			},
		},
	},
	animationsPattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCountSetting: p => p * ANIMATION_RATE,
			},
		},
	},
}
