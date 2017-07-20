import mathUtilities from '../../../../src/utilities/mathUtilities'
import stripeUtilities from '../../../../src/utilities/stripeUtilities'

export default () => stripeUtilities.perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })

const harmonicContinuumSegmentStripePosition = ({ stripeCount, stripeIndex }) => {
	const { triangularNumber, triangularRoot } = mathUtilities
	const previousStripePosition = stripeCount - 1
	const previousStripePositionIndex = triangularNumber(previousStripePosition)
	const currentStripePosition = triangularRoot(previousStripePositionIndex + stripeIndex)
	return currentStripePosition - previousStripePosition
}
