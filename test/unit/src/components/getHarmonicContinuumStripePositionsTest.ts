import getHarmonicContinuumStripePositions from '../../../../src/components/getHarmonicContinuumStripePositions'
import composeMainHoundstooth from '../../../../../../src/execute/composeMainHoundstooth'

describe('get harmonic continuum stripe positions', () => {
	// eslint-disable-next-line max-len
	it('given a count of stripes in each striped tile, and the desired index, will tell you how far across that tile that stripe starts', () => {
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

		expect(getHarmonicContinuumStripePositions()[ 0 ]).toBe(0 as any)
		expect(getHarmonicContinuumStripePositions()[ 1 ]).toBe(1 / 2 as any)
		expect(getHarmonicContinuumStripePositions()[ 3 ]).toBe(1 as any)
		expect(getHarmonicContinuumStripePositions()[ 6 ]).toBe(3 / 2 as any)
	})
})
