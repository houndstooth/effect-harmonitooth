import harmonitoothEffect from '../../../effects/harmonitoothEffect'
import pixelIsColorWithMarker from '../../../../../test/integration/helpers/pixelIsColorWithMarker'
import executeSelectedHoundstoothEffects from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import activateTestMarkerCanvas from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { deepClone, iterator } from '../../../../../src/utilities/codeUtilities'
import state from '../../../../../src/state'
import { thisAnimationFrameOnly } from '../../../../../test/integration/helpers/thisFrameOnly'
import * as animator from '../../../../../src/animation/animator'

describe('harmonitooth effect', () => {
	const harmonitoothTestHoundstoothOverrides = {
		basePattern: {
			gridSettings: { gridSize: 2 },
			viewSettings: { canvasSize: 100 },
			tileSettings: { tileSizeSetting: 50 },
		},
	}

	beforeEach(() => {
		spyOn(animator, 'default').and.callFake(({ animationFunction, stopConditionFunction }) => {
			while (!stopConditionFunction()) {
				animationFunction()
			}
		})
	})

	it('at frame 0, the striped squares have only a single stripe, so are solid', () => {
		const houndstoothOverrides = deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(0)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectWholeTile({ color: TRANSPARENT, address: [ 0, 0 ] })
		expectWholeTile({ color: TRANSPARENT, address: [ 1, 0 ] })
		expectWholeTile({ color: BLACK, address: [ 0, 1 ] })
		expectWholeTile({ color: BLACK, address: [ 1, 1 ] })
	})

	it('around frame 500, it has two harmonically proportioned stripes', () => {
		const houndstoothOverrides = deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(500)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile({ stripeCount: 2, color: TRANSPARENT, address: 0 })
		expectHarmonicStripedTile({ stripeCount: 2, color: BLACK, address: 1 })
		expectWholeTile({ color: BLACK, address: [ 0, 1 ] })
		expectWholeTile({ color: TRANSPARENT, address: [ 1, 0 ] })
	})

	it('around frame 650, it has three harmonically proportioned stripes', () => {
		const houndstoothOverrides = deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(650)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile({ stripeCount: 3, color: TRANSPARENT, address: 0 })
		expectHarmonicStripedTile({ stripeCount: 3, color: BLACK, address: 1 })
		expectWholeTile({ color: BLACK, address: [ 0, 1 ] })
		expectWholeTile({ color: TRANSPARENT, address: [ 1, 0 ] })
	})

	it('around frame 750, it has four harmonically proportioned stripes', () => {
		const houndstoothOverrides = deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(750)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile({ stripeCount: 4, color: TRANSPARENT, address: 0 })
		expectHarmonicStripedTile({ stripeCount: 4, color: BLACK, address: 1 })
		expectWholeTile({ color: BLACK, address: [ 0, 1 ] })
		expectWholeTile({ color: TRANSPARENT, address: [ 1, 0 ] })
	})

	it('around frame 800, it has two harmonically proportioned stripes', () => {
		const houndstoothOverrides = deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(800)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile({ stripeCount: 5, color: TRANSPARENT, address: 0 })
		expectHarmonicStripedTile({ stripeCount: 5, color: BLACK, address: 1 })
		expectWholeTile({ color: BLACK, address: [ 0, 1 ] })
		expectWholeTile({ color: TRANSPARENT, address: [ 1, 0 ] })
	})
})

const expectHarmonicStripedTile = ({ stripeCount, color, address }) => {
	iterator(stripeCount, { oneIndexed: true }).forEach(stripe => {
		const expectedColor = stripe % 2 === 1 ? color : color === BLACK ? TRANSPARENT : BLACK
		const coordinateUnderTest = harmonicStripeCenter({ index: stripe, total: stripeCount, address })
		expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: stripe })).toBe(true)
	})
}

const harmonicStripeCenter = ({ index, total, address }) => {
	const fullProportions = iterator(total).reduce((sum, val) => sum + 1 / (val + 2), 0)
	const thisProportion = iterator(index).reduce((sum, val) => sum + 1 / (val + 2), 0)
	const adjustForHalf = 1 / ((index + 2) * 2)
	const coordinate = (thisProportion - adjustForHalf) / fullProportions
	const coordinateScaledAndTransposed = (address + coordinate) * 50
	return [ coordinateScaledAndTransposed, coordinateScaledAndTransposed ]
}

const expectWholeTile = ({ color: expectedColor, address }) => {
	iterator(12).forEach(check => {
		const coordinateUnderTest = [ 50 * (address[ 0 ] + check / 12), 50 * (address[ 1 ] + check / 12) ]
		expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: check })).toBe(true)
	})
}
