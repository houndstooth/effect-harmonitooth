import { triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe } from '../../../../src'

const getHarmonicContinuumStripePositions = () => perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) => {
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}

export default getHarmonicContinuumStripePositions
