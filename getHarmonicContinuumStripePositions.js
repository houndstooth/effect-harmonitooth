import mathUtilities from '../../utilities/mathUtilities'
import stripeUtilities from '../../utilities/stripeUtilities'

export default () => stripeUtilities.perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) => {
	const { triangularRoot } = mathUtilities
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}
