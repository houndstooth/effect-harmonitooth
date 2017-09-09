import mathUtilities from '../../../../src/utilities/mathUtilities'
import perStripe from '../../../../src/components/perStripe'

export default () => perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) => {
	const { triangularRoot } = mathUtilities
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}
