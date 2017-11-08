import { composeMainHoundstooth } from '../../../../../src/app/execute/composeMainHoundstooth'
import * as to from '../../../../../src/to'
import { getHarmonicContinuumStripePositions } from '../../../pattern/stripe/getHarmonicContinuumStripePositions'

describe('get harmonic continuum stripe positions', () => {
	// tslint:disable-next-line:max-line-length
	it('given a count of stripes in each striped tile, and the desired index, will tell you how far across that tile that stripe starts', () => {
		composeMainHoundstooth({
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							stripeCount: 10,
						},
					},
				},
			},
		})

		expect(getHarmonicContinuumStripePositions()[ 0 ]).toBe(to.StripePosition(0))
		expect(getHarmonicContinuumStripePositions()[ 1 ]).toBe(to.StripePosition(1 / 2))
		expect(getHarmonicContinuumStripePositions()[ 3 ]).toBe(to.StripePosition(1))
		expect(getHarmonicContinuumStripePositions()[ 6 ]).toBe(to.StripePosition(3 / 2))
	})
})
