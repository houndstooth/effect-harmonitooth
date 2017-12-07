import { to } from '../../../../../src'
import { setPatternStateForTest } from '../../../../../test'
import { getHarmonicContinuumStripePositions } from '../../../pattern'

describe('get harmonic continuum stripe positions', () => {
	// tslint:disable-next-line:max-line-length
	it('given a count of stripes in each striped tile, and the desired index, will tell you how far across that tile that stripe starts', () => {
		setPatternStateForTest('stripeCount', 10)

		expect(getHarmonicContinuumStripePositions.default()[ 0 ]).toBe(to.StripePosition(0))
		expect(getHarmonicContinuumStripePositions.default()[ 1 ]).toBe(to.StripePosition(1 / 2))
		expect(getHarmonicContinuumStripePositions.default()[ 3 ]).toBe(to.StripePosition(1))
		expect(getHarmonicContinuumStripePositions.default()[ 6 ]).toBe(to.StripePosition(3 / 2))
	})
})
