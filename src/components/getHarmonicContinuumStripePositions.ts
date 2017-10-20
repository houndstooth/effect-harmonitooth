import { GetStripePosition, perStripe, StripePosition, to } from '../../../../src'
import { triangularRoot } from '../../../../src/utilities/mathUtilities'

const getHarmonicContinuumStripePositions: () => StripePosition[] = () =>
	perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition: GetStripePosition = ({ stripeIndex, stripeCount }) =>
	to.StripePosition(triangularRoot(stripeIndex) / triangularRoot(stripeCount))

export { getHarmonicContinuumStripePositions }
