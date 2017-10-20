import { Effect, standardAnimation } from '../../../src'
import { getHarmonicContinuumStripePositions } from '../src'

const harmonitoothEffect: Effect = {
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

export { harmonitoothEffect }
