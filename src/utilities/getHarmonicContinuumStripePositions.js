import mathUtilities from '../../../../src/utilities/mathUtilities'
import stripeUtilities from '../../../../src/utilities/stripeUtilities'

export default () => stripeUtilities.perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) => {
	const { triangularRoot } = mathUtilities
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}
