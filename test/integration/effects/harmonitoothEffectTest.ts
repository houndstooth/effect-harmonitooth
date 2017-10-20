import * as animator from '../../../../../src/animation/animator'
import { Address } from '../../../../../src/components/types/Address'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { executeSelectedHoundstoothEffects } from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import { state } from '../../../../../src/state'
import { deepClone } from '../../../../../src/utilities/codeUtilities'
import { activateTestMarkerCanvas } from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { thisAnimationFrameOnly } from '../../../../../test/integration/helpers/thisFrameOnly'
import { harmonitoothEffect } from '../../../effects/harmonitoothEffect'
import { expectHarmonicStripedTile } from '../helpers/expectHarmonicStripedTile'
import { expectWholeTile } from '../helpers/expectWholeTile'

describe('harmonitooth effect', () => {
	const harmonitoothTestHoundstoothOverrides = {
		basePattern: {
			gridSettings: { gridSize: 2 },
			tileSettings: { tileSizeSetting: 50 as any },
			viewSettings: { canvasSize: 100 },
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
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(0 as any)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectWholeTile({ color: TRANSPARENT, gridAddress: [ 0, 0 ] as Address })
		expectWholeTile({ color: TRANSPARENT, gridAddress: [ 1, 0 ] as Address })
		expectWholeTile({ color: BLACK, gridAddress: [ 0, 1 ] as Address })
		expectWholeTile({ color: BLACK, gridAddress: [ 1, 1 ] as Address })
	})

	it('around frame 500, it has two harmonically proportioned stripes', () => {
		const houndstoothOverrides = deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(500 as any)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile({ stripeCount: 2, color: TRANSPARENT, diagonalAddress: 0 })
		expectHarmonicStripedTile({ stripeCount: 2, color: BLACK, diagonalAddress: 1 })
		expectWholeTile({ color: BLACK, gridAddress: [ 0, 1 ] as Address })
		expectWholeTile({ color: TRANSPARENT, gridAddress: [ 1, 0 ] as Address })
	})

	it('around frame 650, it has three harmonically proportioned stripes', () => {
		const houndstoothOverrides = deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(650 as any)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile({ stripeCount: 3, color: TRANSPARENT, diagonalAddress: 0 })
		expectHarmonicStripedTile({ stripeCount: 3, color: BLACK, diagonalAddress: 1 })
		expectWholeTile({ color: BLACK, gridAddress: [ 0, 1 ] as Address })
		expectWholeTile({ color: TRANSPARENT, gridAddress: [ 1, 0 ] as Address })
	})

	it('around frame 750, it has four harmonically proportioned stripes', () => {
		const houndstoothOverrides = deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(750 as any)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile({ stripeCount: 4, color: TRANSPARENT, diagonalAddress: 0 })
		expectHarmonicStripedTile({ stripeCount: 4, color: BLACK, diagonalAddress: 1 })
		expectWholeTile({ color: BLACK, gridAddress: [ 0, 1 ] as Address })
		expectWholeTile({ color: TRANSPARENT, gridAddress: [ 1, 0 ] as Address })
	})

	it('around frame 800, it has two harmonically proportioned stripes', () => {
		const houndstoothOverrides = deepClone(harmonitoothTestHoundstoothOverrides)
		houndstoothOverrides.basePattern.animationSettings = thisAnimationFrameOnly(800 as any)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		expectHarmonicStripedTile({ stripeCount: 5, color: TRANSPARENT, diagonalAddress: 0 })
		expectHarmonicStripedTile({ stripeCount: 5, color: BLACK, diagonalAddress: 1 })
		expectWholeTile({ color: BLACK, gridAddress: [ 0, 1 ] as Address })
		expectWholeTile({ color: TRANSPARENT, gridAddress: [ 1, 0 ] as Address })
	})
})
