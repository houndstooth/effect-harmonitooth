import { triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe } from '../../../../src'

const getHarmonicContinuumStripePositions: { (): number[] } = () => {
	return perStripe({ getStripePosition: harmonicContinuumStripePosition })
}

type HarmonicContinuumStripePosition = { ({}: { stripeIndex: number, stripeCount: number }): number }

const harmonicContinuumStripePosition: HarmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) => {
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}

export default getHarmonicContinuumStripePositions
