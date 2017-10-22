import { Effect, standardAnimation } from '../../../src'
import { getHarmonicContinuumStripePositions } from '../src'

const harmonitoothEffect: Effect = {
	animationsPattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCount: standardAnimation,
			},
		},
	},
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				getStripePositions: getHarmonicContinuumStripePositions,
				stripeCount: 1,
			},
		},
	},
	name: 'harmonitooth',
}

export { harmonitoothEffect }
