import { composeMainHoundstooth, to } from '../../../../../src'
import { getHarmonicContinuumStripePositions } from '../../../pattern'

describe('get harmonic continuum stripe positions', () => {
	// tslint:disable-next-line:max-line-length
	it('given a count of stripes in each striped tile, and the desired index, will tell you how far across that tile that stripe starts', () => {
		composeMainHoundstooth.main({
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

		expect(getHarmonicContinuumStripePositions.main()[ 0 ]).toBe(to.StripePosition(0))
		expect(getHarmonicContinuumStripePositions.main()[ 1 ]).toBe(to.StripePosition(1 / 2))
		expect(getHarmonicContinuumStripePositions.main()[ 3 ]).toBe(to.StripePosition(1))
		expect(getHarmonicContinuumStripePositions.main()[ 6 ]).toBe(to.StripePosition(3 / 2))
	})
})
