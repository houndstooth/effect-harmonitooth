import { GetStripePositions, to } from '../../../../../src'
import { setPatternStateForTest } from '../../../../../test'
import { getHarmonicContinuumStripePositions } from '../../../pattern'

const subject: GetStripePositions = getHarmonicContinuumStripePositions.default

describe('get harmonic continuum stripe positions', () => {
	// tslint:disable-next-line:max-line-length
	it('given a count of stripes in each striped tile, and the desired index, will tell you how far across that tile that stripe starts', () => {
		setPatternStateForTest('stripeCount', 10)

		expect(subject()[ 0 ]).toBe(to.StripePosition(0))
		expect(subject()[ 1 ]).toBe(to.StripePosition(1 / 2))
		expect(subject()[ 3 ]).toBe(to.StripePosition(1))
		expect(subject()[ 6 ]).toBe(to.StripePosition(3 / 2))
	})
})
