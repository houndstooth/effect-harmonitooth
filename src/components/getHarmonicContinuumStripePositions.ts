import { triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe, StripePosition, GetStripePosition } from '../../../../src'

const getHarmonicContinuumStripePositions: { (): StripePosition[] } = () =>
	perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition: GetStripePosition = ({ stripeIndex, stripeCount }) =>
	triangularRoot(stripeIndex) / triangularRoot(stripeCount) as any

export default getHarmonicContinuumStripePositions
