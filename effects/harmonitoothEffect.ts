import { NamedEffect, standardAnimation } from '../../../src'
import { getHarmonicContinuumStripePositions } from '../pattern'
import HARMONITOOTH_DESCRIPTION from './harmonitoothDescription'

const harmonitoothEffect: NamedEffect = {
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
	description: HARMONITOOTH_DESCRIPTION,
	name: 'harmonitooth',
}

export { harmonitoothEffect }
