import getHarmonicContinuumSegmentStripePositions from '../../../src/components/getHarmonicContinuumSegmentStripePositions'
import state from '../../../../../state'
import resetState from '../../../../../src/store/resetState'
import composeMainHoundstooth from '../../../../../src/execute/composeMainHoundstooth'

describe('get harmonic continuum segment stripe positions', () => {
	it('can calculate the same information that the gingham chevron continuum stripe positions can, just each tile individually figures itself out, inferring its position in the whole from its stripe count', () => {
		resetState(state)
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
