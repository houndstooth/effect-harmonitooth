import getHarmonicContinuumSegmentStripePositions from '../../../src/utilities/getHarmonicContinuumSegmentStripePositions'
import store from '../../../../../store'
import resetStore from '../../../../../test/helpers/resetStore'
import composeMainHoundstooth from '../../../../../src/store/composeMainHoundstooth'

describe('get harmonic continuum segment stripe positions', () => {
	it('can calculate the same information that the gingham chevron continuum stripe positions can, just each tile individually figures itself out, inferring its position in the whole from its stripe count', () => {
		resetStore(store)
		composeMainHoundstooth({
			houndstoothOverrides: {
				basePattern: {
					stripeSettings: {
						stripePositionSettings: {
							stripeCountSetting: 9,
						},
					},
				},
			},
		})

		expect(getHarmonicContinuumSegmentStripePositions()).toEqual([ 0, 0.23368793961408585, 0.4642491965729789, 0.6918060129541317, 0.9164728671689168, 1.1383571472170537, 1.3575597506858195, 1.5741756210067095, 1.7882942280559355 ])
	})
})
