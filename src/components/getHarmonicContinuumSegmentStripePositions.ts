import { triangularNumber, triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe } from '../../../../src'
import StripePosition from '../../../../src/components/types/StripePosition'

const getHarmonicContinuumSegmentStripePositions: { (): StripePosition[] } = () => {
	return perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })
}

type HarmonicContinuumSegmentStripePosition = { ({}: { stripeCount: number, stripeIndex: number }): StripePosition }

const harmonicContinuumSegmentStripePosition: HarmonicContinuumSegmentStripePosition = params => {
	const { stripeCount, stripeIndex } = params
	const previousStripePosition = stripeCount - 1
	const previousStripePositionIndex = triangularNumber(previousStripePosition)
	const currentStripePosition = triangularRoot(previousStripePositionIndex + stripeIndex)
	return currentStripePosition - previousStripePosition as any
}

export default getHarmonicContinuumSegmentStripePositions
