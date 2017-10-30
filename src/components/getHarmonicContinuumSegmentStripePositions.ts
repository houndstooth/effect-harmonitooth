import { GetStripePosition, GetStripePositions, perStripe, StripePosition, to } from '../../../../src'
import { triangularNumber, triangularRoot } from '../../../../src/utilities/mathUtilities'

const getHarmonicContinuumSegmentStripePositions: GetStripePositions =
	(): StripePosition[] => perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })

const harmonicContinuumSegmentStripePosition: GetStripePosition =
	({ stripeCount, stripeIndex }: { stripeCount: number, stripeIndex: number }): StripePosition => {
		const previousStripePosition: number = stripeCount - 1
		const previousStripePositionIndex: number = triangularNumber(previousStripePosition)
		const currentStripePosition: number = triangularRoot(previousStripePositionIndex + stripeIndex)

		return to.StripePosition(currentStripePosition - previousStripePosition)
	}

export { getHarmonicContinuumSegmentStripePositions }
