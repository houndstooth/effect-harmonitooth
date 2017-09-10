import mathUtilities from '../../../../src/utilities/mathUtilities'
import src from '../../../../src'

export default () => src.perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) => {
	const { triangularRoot } = mathUtilities
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}
