import { ANIMATION_RATE } from '../../application/constants'
import getHarmonicContinuumStripePositions from './getHarmonicContinuumStripePositions'
import state from '../../state/state'
import currentAnimation from '../../state/currentAnimation'

export default {
	state: {
		stripeCountConfig: {
			stripeCount: 1
		},
		getStripePositions: getHarmonicContinuumStripePositions
	},
	animations: {
		stripeCountConfig: {
			stripeCount: () => state.stripeCountConfig.stripeCount * Math.pow(ANIMATION_RATE, currentAnimation.i)
		}
	}
}
