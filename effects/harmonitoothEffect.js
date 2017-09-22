import { standardAnimation } from '../../../src'
import { getHarmonicContinuumStripePositions } from '../src'

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
