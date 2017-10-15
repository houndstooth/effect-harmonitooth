import { triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe, StripePosition } from '../../../../src'

const getHarmonicContinuumStripePositions: { (): StripePosition[] } = () =>
	perStripe({ getStripePosition: harmonicContinuumStripePosition })

type HarmonicContinuumStripePosition = { ({}: { stripeIndex: number, stripeCount: number }): StripePosition }

const harmonicContinuumStripePosition: HarmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) =>
	triangularRoot(stripeIndex) / triangularRoot(stripeCount) as any

export default getHarmonicContinuumStripePositions
