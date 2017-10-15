import { triangularNumber, triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe } from '../../../../src'
import StripePosition from '../../../../src/components/types/StripePosition'

const getHarmonicContinuumSegmentStripePositions: { (): StripePosition[] } = () =>
	perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })

const harmonicContinuumSegmentStripePosition: {
	({}: { stripeCount: number, stripeIndex: number }): StripePosition,
} = ({ stripeCount, stripeIndex }) => {
	const previousStripePosition = stripeCount - 1
	const previousStripePositionIndex = triangularNumber(previousStripePosition)
	const currentStripePosition = triangularRoot(previousStripePositionIndex + stripeIndex)

	return currentStripePosition - previousStripePosition as any
}

export default getHarmonicContinuumSegmentStripePositions
