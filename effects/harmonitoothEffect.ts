import { Effect, standardAnimation } from '../../../src'
import { getHarmonicContinuumStripePositions } from '../pattern'

const harmonitoothEffect: Effect = {
	animationsPattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCount: standardAnimation.default,
			},
		},
	},
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				getStripePositions: getHarmonicContinuumStripePositions.default,
				stripeCount: 1,
			},
		},
	},
	name: 'harmonitooth',
}

export { harmonitoothEffect }
