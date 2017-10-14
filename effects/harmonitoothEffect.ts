import { standardAnimation } from '../../../src'
import { getHarmonicContinuumStripePositions } from '../src'
import { Houndstooth } from '../../../src'

const harmonitoothEffect: Houndstooth = {
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

export default harmonitoothEffect
