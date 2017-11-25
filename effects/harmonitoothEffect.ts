import { Effect, standardAnimation } from '../../../src'
import { getHarmonicContinuumStripePositions } from '../pattern'

const harmonitoothEffect: Effect = {
	animationsPattern: {
		stripeSettings: {
			stripePositionSettings: {
				stripeCount: standardAnimation.main,
			},
		},
	},
	basePattern: {
		stripeSettings: {
			stripePositionSettings: {
				getStripePositions: getHarmonicContinuumStripePositions.main,
				stripeCount: 1,
			},
		},
	},
	name: 'harmonitooth',
}

export { harmonitoothEffect }
