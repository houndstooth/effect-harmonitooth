import { GetStripePosition, GetStripePositions, mathUtilities, perStripe, StripePosition } from '../../../../src'
import * as to from '../../../../src/to'

const getHarmonicContinuumSegmentStripePositions: GetStripePositions =
	(): StripePosition[] => perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })

const harmonicContinuumSegmentStripePosition: GetStripePosition =
	({ stripeCount, stripeIndex }: { stripeCount: number, stripeIndex: number }): StripePosition => {
		const previousStripePosition: number = stripeCount - 1
		const previousStripePositionIndex: number = mathUtilities.triangularNumber(previousStripePosition)
		const currentStripePosition: number = mathUtilities.triangularRoot(previousStripePositionIndex + stripeIndex)

		return to.StripePosition(currentStripePosition - previousStripePosition)
	}

export { getHarmonicContinuumSegmentStripePositions }
