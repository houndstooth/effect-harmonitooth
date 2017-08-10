import standardAnimation from '../../../src/animation/standardAnimation'
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
				stripeCountSetting: standardAnimation,
			},
		},
	},
}
