import { GetStripePosition, GetStripePositions, mathUtilities, perStripe, StripePosition, to } from '../../../../src'

const getHarmonicContinuumStripePositions: GetStripePositions =
	(): StripePosition[] => perStripe.default({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition: GetStripePosition =
	({ stripeIndex, stripeCount }: { stripeCount: number, stripeIndex: number }): StripePosition =>
		to.StripePosition(mathUtilities.triangularRoot(stripeIndex) / mathUtilities.triangularRoot(stripeCount))

export default getHarmonicContinuumStripePositions
