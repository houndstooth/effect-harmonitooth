import { triangularNumber, triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe, StripePosition, GetStripePosition } from '../../../../src'

const getHarmonicContinuumSegmentStripePositions: { (): StripePosition[] } = () =>
	perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })

const harmonicContinuumSegmentStripePosition: GetStripePosition = ({ stripeCount, stripeIndex }) => {
	const previousStripePosition = stripeCount - 1
	const previousStripePositionIndex = triangularNumber(previousStripePosition)
	const currentStripePosition = triangularRoot(previousStripePositionIndex + stripeIndex)

	return currentStripePosition - previousStripePosition as any
}

export default getHarmonicContinuumSegmentStripePositions
