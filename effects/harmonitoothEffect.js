import src from '../../../src'
import harmonitoothSrc from '../src'

export default {
	name: 'harmonitooth',
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCountSetting: 1,
				getStripePositions: harmonitoothSrc.getHarmonicContinuumStripePositions,
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
