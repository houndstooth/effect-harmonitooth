import harmonitoothEffect from '../../effects/harmonitoothEffect'
import pixelIsColorWithMarker from '../../../../test/integration/helpers/pixelIsColorWithMarker'
import executeSelectedHoundstoothEffects from '../../../../src/controls/executeSelectedHoundstoothEffects'
import activateTestMarkerCanvas from '../../../../test/integration/helpers/activateTestMarkerCanvas'
import { BLACK, TRANSPARENT } from '../../../../src/constants'
import codeUtilities from '../../../../src/utilities/codeUtilities'
import store from '../../../../store'
import resetStore from '../../../../src/store/resetStore'
import thisFrameOnly from '../../../../test/integration/helpers/thisFrameOnly'

describe('harmonitooth effect', () => {
	const harmonitoothTestHoundstoothOverrides = {
		basePattern: {
			gridSettings: { gridSize: 2 },
			viewSettings: { canvasSize: 100 },
			tileSettings: { tileSizeSetting: 50 },
		},
	}

	let thisAnimationFrameOnly
	beforeEach(() => {
		thisAnimationFrameOnly = thisFrameOnly.thisAnimationFrameOnly
		resetStore(store)
		const animatorSpy = jasmine.createSpy().and.callFake(({ animationFunction, stopCondition }) => {
			while (!stopCondition()) animationFunction()
		})
		executeSelectedHoundstoothEffects.__Rewire__('animator', animatorSpy)
	})

	it('at frame 0, the striped squares have only a single stripe, so are solid', () => {
		const houndstoothOverrides = codeUtilities.deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(0)
		store.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		store.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectWholeTile(TRANSPARENT, [ 0, 0 ])
		expectWholeTile(TRANSPARENT, [ 1, 0 ])
		expectWholeTile(BLACK, [ 0, 1 ])
		expectWholeTile(BLACK, [ 1, 1 ])
	})

	it('around frame 500, it has two harmonically proportioned stripes', () => {
		const houndstoothOverrides = codeUtilities.deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(500)
		store.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		store.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile(2, TRANSPARENT, 0)
		expectHarmonicStripedTile(2, BLACK, 1)
		expectWholeTile(BLACK, [ 0, 1 ])
		expectWholeTile(TRANSPARENT, [ 1, 0 ])
	})

	it('around frame 650, it has three harmonically proportioned stripes', () => {
		const houndstoothOverrides = codeUtilities.deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(650)
		store.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		store.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile(3, TRANSPARENT, 0)
		expectHarmonicStripedTile(3, BLACK, 1)
		expectWholeTile(BLACK, [ 0, 1 ])
		expectWholeTile(TRANSPARENT, [ 1, 0 ])
	})

	it('around frame 750, it has four harmonically proportioned stripes', () => {
		const houndstoothOverrides = codeUtilities.deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(750)
		store.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		store.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile(4, TRANSPARENT, 0)
		expectHarmonicStripedTile(4, BLACK, 1)
		expectWholeTile(BLACK, [ 0, 1 ])
		expectWholeTile(TRANSPARENT, [ 1, 0 ])
	})

	it('around frame 800, it has two harmonically proportioned stripes', () => {
		const houndstoothOverrides = codeUtilities.deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(800)
		store.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		store.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile(5, TRANSPARENT, 0)
		expectHarmonicStripedTile(5, BLACK, 1)
		expectWholeTile(BLACK, [ 0, 1 ])
		expectWholeTile(TRANSPARENT, [ 1, 0 ])
	})
})

const expectHarmonicStripedTile = (stripeCount, color, addressCoordinate) => {
	codeUtilities.iterator(stripeCount, { oneIndexed: true }).forEach(stripe => {
		const expectedColor = stripe % 2 === 1 ? color : color === BLACK ? TRANSPARENT : BLACK
		const harmonicPixel = harmonicStripeCenter(stripe, stripeCount, addressCoordinate)
		expect(pixelIsColorWithMarker(harmonicPixel, expectedColor, stripe)).toBe(true)
	})
}

const harmonicStripeCenter = (index, total, address) => {
	const fullProportions = codeUtilities.iterator(total).reduce((sum, val) => sum + 1 / (val + 2), 0)
	const thisProportion = codeUtilities.iterator(index).reduce((sum, val) => sum + 1 / (val + 2), 0)
	const adjustForHalf = 1 / ((index + 2) * 2)
	const coordinate = (thisProportion - adjustForHalf) / fullProportions
	const coordinateScaledAndTransposed = (address + coordinate) * 50
	return [ coordinateScaledAndTransposed, coordinateScaledAndTransposed ]
}

const expectWholeTile = (color, address) => {
	codeUtilities.iterator(12).forEach(check => {
		const coordinate = [ 50 * (address[ 0 ] + (check / 12)), 50 * (address[ 1 ] + (check / 12)) ]
		expect(pixelIsColorWithMarker(coordinate, color, check)).toBe(true)
	})
}
