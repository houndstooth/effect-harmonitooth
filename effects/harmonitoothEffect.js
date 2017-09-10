import src from '../../../src'
import getHarmonicContinuumStripePositions from '../src/utilities/getHarmonicContinuumStripePositions'

export default {
	name: 'harmonitooth',
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
				stripeCountSetting: src.standardAnimation,
			},
		},
	},
}
