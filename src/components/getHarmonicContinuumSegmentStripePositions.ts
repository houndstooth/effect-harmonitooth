import { GetStripePosition, perStripe, StripePosition, to } from '../../../../src'
import { triangularNumber, triangularRoot } from '../../../../src/utilities/mathUtilities'

const getHarmonicContinuumSegmentStripePositions: () => StripePosition[] = () =>
	perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })

const harmonicContinuumSegmentStripePosition: GetStripePosition = ({ stripeCount, stripeIndex }) => {
	const previousStripePosition = stripeCount - 1
	const previousStripePositionIndex = triangularNumber(previousStripePosition)
	const currentStripePosition = triangularRoot(previousStripePositionIndex + stripeIndex)

	return to.StripePosition(currentStripePosition - previousStripePosition)
}

export { getHarmonicContinuumSegmentStripePositions }
