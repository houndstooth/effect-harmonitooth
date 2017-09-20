import { triangularNumber, triangularRoot } from '../../../../src/utilities/mathUtilities'
import src from '../../../../src'

export default () => src.perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })

const harmonicContinuumSegmentStripePosition = ({ stripeCount, stripeIndex }) => {
	const previousStripePosition = stripeCount - 1
	const previousStripePositionIndex = triangularNumber(previousStripePosition)
	const currentStripePosition = triangularRoot(previousStripePositionIndex + stripeIndex)
	return currentStripePosition - previousStripePosition
}