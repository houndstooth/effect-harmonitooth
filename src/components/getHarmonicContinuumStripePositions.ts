import { triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe, StripePosition } from '../../../../src'

const getHarmonicContinuumStripePositions: { (): StripePosition[] } = () => {
	return perStripe({ getStripePosition: harmonicContinuumStripePosition })
}

type HarmonicContinuumStripePosition = { ({}: { stripeIndex: number, stripeCount: number }): StripePosition }

const harmonicContinuumStripePosition: HarmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) => {
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}

export default getHarmonicContinuumStripePositions
