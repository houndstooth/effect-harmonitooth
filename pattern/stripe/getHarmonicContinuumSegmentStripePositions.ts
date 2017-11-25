import { GetStripePosition, GetStripePositions, mathUtilities, perStripe, StripePosition, to } from '../../../../src'

const getHarmonicContinuumSegmentStripePositions: GetStripePositions =
	(): StripePosition[] => perStripe.main({ getStripePosition: harmonicContinuumSegmentStripePosition })

const harmonicContinuumSegmentStripePosition: GetStripePosition =
	({ stripeCount, stripeIndex }: { stripeCount: number, stripeIndex: number }): StripePosition => {
		const previousStripePosition: number = stripeCount - 1
		const previousStripePositionIndex: number = mathUtilities.triangularNumber(previousStripePosition)
		const currentStripePosition: number = mathUtilities.triangularRoot(previousStripePositionIndex + stripeIndex)

		return to.StripePosition(currentStripePosition - previousStripePosition)
	}

export { getHarmonicContinuumSegmentStripePositions as main }
