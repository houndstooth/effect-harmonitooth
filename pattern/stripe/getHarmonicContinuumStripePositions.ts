import { GetStripePosition, GetStripePositions, mathUtilities, perStripe, StripePosition, to } from '../../../../src'

const getHarmonicContinuumStripePositions: GetStripePositions =
	(): StripePosition[] => perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition: GetStripePosition =
	({ stripeIndex, stripeCount }: { stripeCount: number, stripeIndex: number }): StripePosition =>
		to.StripePosition(mathUtilities.triangularRoot(stripeIndex) / mathUtilities.triangularRoot(stripeCount))

export { getHarmonicContinuumStripePositions }
