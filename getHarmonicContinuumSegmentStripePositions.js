import mathUtilities from '../../utilities/mathUtilities'
import stripeUtilities from '../../utilities/stripeUtilities'

export default () => stripeUtilities.perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })

const harmonicContinuumSegmentStripePosition =  ({ stripeCount, stripeIndex }) => {
	const { triangularNumber, triangularRoot } = mathUtilities
	const previous = stripeCount - 1
	const tri = triangularNumber(previous)
	const current = triangularRoot(tri + stripeIndex)
	return current - previous
}
