import { Houndstooth, standardAnimation } from '../../../src'
import { getHarmonicContinuumStripePositions } from '../src'

const harmonitoothEffect: Houndstooth = {
	animationsPattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCountSetting: standardAnimation,
			},
		},
	},
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				getStripePositions: getHarmonicContinuumStripePositions,
				stripeCountSetting: 1,
			},
		},
	},
	name: 'harmonitooth',
}

export default harmonitoothEffect
