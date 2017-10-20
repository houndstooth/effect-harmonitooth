import { to } from '../../../../../../src'
import { composeMainHoundstooth } from '../../../../../../src/execute/composeMainHoundstooth'
// tslint:disable-next-line:max-line-length
import { getHarmonicContinuumSegmentStripePositions } from '../../../../src/components/getHarmonicContinuumSegmentStripePositions'

describe('get harmonic continuum segment stripe positions', () => {
	// tslint:disable-next-line:max-line-length
	it('can calculate the same information that the gingham chevron continuum stripe positions can, just each tile individually figures itself out, inferring its position in the whole from its stripe count', () => {
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

		expect(getHarmonicContinuumSegmentStripePositions()).toEqual(to.StripePositions([
			0,
			0.23368793961408585,
			0.4642491965729789,
			0.6918060129541317,
			0.9164728671689168,
			1.1383571472170537,
			1.3575597506858195,
			1.5741756210067095,
			1.7882942280559355,
		]))
	})
})
