import getHarmonicContinuumStripePositions from '../../../src/utilities/getHarmonicContinuumStripePositions'
import store from '../../../../../store'
import resetStore from '../../../../../src/store/resetStore'
import composeMainHoundstooth from '../../../../../src/store/composeMainHoundstooth'

describe('get harmonic continuum stripe positions', () => {
	it('given a count of stripes in each striped tile, and the desired index, will tell you how far across that tile that stripe starts', () => {
		resetStore(store)
		composeMainHoundstooth({
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							stripeCountSetting: 10,
						},
					},
				},
			},
		})

		expect(getHarmonicContinuumStripePositions()[ 0 ]).toBe(0)
		expect(getHarmonicContinuumStripePositions()[ 1 ]).toBe(1 / 2)
		expect(getHarmonicContinuumStripePositions()[ 3 ]).toBe(1)
		expect(getHarmonicContinuumStripePositions()[ 6 ]).toBe(3 / 2)
	})
})
