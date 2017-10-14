import { triangularNumber, triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe } from '../../../../src'

const getHarmonicContinuumSegmentStripePositions: { (): number[] } = () => {
	return perStripe({ getStripePosition: harmonicContinuumSegmentStripePosition })
}

const harmonicContinuumSegmentStripePosition: {
	({}: { stripeCount: number, stripeIndex: number }): number,
	} = ({ stripeCount, stripeIndex }) => {
		const previousStripePosition = stripeCount - 1
		const previousStripePositionIndex = triangularNumber(previousStripePosition)
		const currentStripePosition = triangularRoot(previousStripePositionIndex + stripeIndex)
		return currentStripePosition - previousStripePosition
	}

export default getHarmonicContinuumSegmentStripePositions
