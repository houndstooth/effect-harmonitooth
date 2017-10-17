import { GetStripePosition, perStripe, StripePosition } from '../../../../src'
import { triangularRoot } from '../../../../src/utilities/mathUtilities'

const getHarmonicContinuumStripePositions: { (): StripePosition[] } = () =>
	perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition: GetStripePosition = ({ stripeIndex, stripeCount }) =>
	triangularRoot(stripeIndex) / triangularRoot(stripeCount) as any

export default getHarmonicContinuumStripePositions
