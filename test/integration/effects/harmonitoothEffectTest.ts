import { animator, constants, Effect, executeSelectedHoundstoothEffects, state, to } from '../../../../../src'
import { activateTestMarkerCanvas, fakeAnimator, thisFrameOnly } from '../../../../../test'
import { harmonitoothEffect } from '../../../effects'
import { expectHarmonicStripedTile, expectWholeTile } from '../helpers'

const { BLACK, TRANSPARENT } = constants

describe('harmonitooth effect', () => {
	const harmonitoothTestHoundstoothOverrides: Effect = {
		basePattern: {
			gridSettings: { tileResolution: 2 },
			tileSettings: { tileSize: to.Unit(50) },
			viewSettings: { canvasSize: to.Px(100) },
		},
	}

	beforeEach(() => {
		spyOn(animator, 'default').and.callFake(fakeAnimator)
		state.currentFrame = to.Frame(0)
		state.selectedHoundstoothEffects = [ harmonitoothEffect ]
		activateTestMarkerCanvas()
		state.animating = true
	})

	afterEach(() => {
		state.animating = false
	})

	it('at frame 0, the striped squares have only a single stripe, so are solid', async (done: DoneFn) => {
		const houndstoothOverrides: Effect = {
			...harmonitoothTestHoundstoothOverrides,
			basePattern: { animationSettings: thisFrameOnly(to.Frame(0)) },
		}

		executeSelectedHoundstoothEffects.main({ houndstoothOverrides })

		setTimeout(() => {
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 0, 0 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 1, 1 ]) })

			done()
		},         0)
	})

	it('around frame 500, it has two harmonically proportioned stripes', async (done: DoneFn) => {
		const houndstoothOverrides: Effect = {
			...harmonitoothTestHoundstoothOverrides,
			basePattern: { animationSettings: thisFrameOnly(to.Frame(500)) },
		}

		executeSelectedHoundstoothEffects.main({ houndstoothOverrides })

		setTimeout(() => {
			expectHarmonicStripedTile({ stripeCount: 2, color: TRANSPARENT, diagonalAddress: 0 })
			expectHarmonicStripedTile({ stripeCount: 2, color: BLACK, diagonalAddress: 1 })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })
			done()
		},         0)
	})

	it('around frame 650, it has three harmonically proportioned stripes', async (done: DoneFn) => {
		const houndstoothOverrides: Effect = {
			...harmonitoothTestHoundstoothOverrides,
			basePattern: { animationSettings: thisFrameOnly(to.Frame(650)) },
		}

		executeSelectedHoundstoothEffects.main({ houndstoothOverrides })

		setTimeout(() => {
			expectHarmonicStripedTile({ stripeCount: 3, color: TRANSPARENT, diagonalAddress: 0 })
			expectHarmonicStripedTile({ stripeCount: 3, color: BLACK, diagonalAddress: 1 })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })

			done()
		},         0)
	})

	it('around frame 750, it has four harmonically proportioned stripes', async (done: DoneFn) => {
		const houndstoothOverrides: Effect = {
			...harmonitoothTestHoundstoothOverrides,
			basePattern: { animationSettings: thisFrameOnly(to.Frame(750)) },
		}

		executeSelectedHoundstoothEffects.main({ houndstoothOverrides })

		setTimeout(() => {
			expectHarmonicStripedTile({ stripeCount: 4, color: TRANSPARENT, diagonalAddress: 0 })
			expectHarmonicStripedTile({ stripeCount: 4, color: BLACK, diagonalAddress: 1 })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })

			done()
		},         0)
	})

	it('around frame 800, it has five harmonically proportioned stripes', async (done: DoneFn) => {
		const houndstoothOverrides: Effect = {
			...harmonitoothTestHoundstoothOverrides,
			basePattern: { animationSettings: thisFrameOnly(to.Frame(800)) },
		}

		executeSelectedHoundstoothEffects.main({ houndstoothOverrides })

		setTimeout(() => {
			expectHarmonicStripedTile({ stripeCount: 5, color: TRANSPARENT, diagonalAddress: 0 })
			expectHarmonicStripedTile({ stripeCount: 5, color: BLACK, diagonalAddress: 1 })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })

			done()
		},         0)
	})
})
