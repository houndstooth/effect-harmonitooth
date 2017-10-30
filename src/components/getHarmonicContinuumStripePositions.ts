import { GetStripePosition, GetStripePositions, perStripe, StripePosition, to } from '../../../../src'
import { triangularRoot } from '../../../../src/utilities/mathUtilities'

const getHarmonicContinuumStripePositions: GetStripePositions =
	(): StripePosition[] => perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition: GetStripePosition =
	({ stripeIndex, stripeCount }: { stripeCount: number, stripeIndex: number }): StripePosition =>
		to.StripePosition(triangularRoot(stripeIndex) / triangularRoot(stripeCount))

export { getHarmonicContinuumStripePositions }
