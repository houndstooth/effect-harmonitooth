import { GetStripePosition, GetStripePositions, perStripe, to } from '../../../../src'
import { triangularRoot } from '../../../../src/utilities/mathUtilities'

const getHarmonicContinuumStripePositions: GetStripePositions = () =>
	perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition: GetStripePosition = ({ stripeIndex, stripeCount }) =>
	to.StripePosition(triangularRoot(stripeIndex) / triangularRoot(stripeCount))

export { getHarmonicContinuumStripePositions }
