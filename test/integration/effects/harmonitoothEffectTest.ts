import { appState, constants, Effect, executeSelectedEffects, to } from '../../../../../src'
import { harmonitoothEffect } from '../../../effects'
import { expectHarmonicStripedTile, expectWholeTile } from '../helpers'

const { BLACK, TRANSPARENT } = constants

describe('harmonitooth effect', () => {
	const overrides: Effect = {
		basePattern: {
			gridSettings: { tileResolution: 2 },
			tileSettings: { tileSize: to.Unit(50) },
		},
	}

	beforeEach(() => {
		appState.controls.selectedEffects = [ harmonitoothEffect ]
	})

	it('at frame 0, the striped squares have only a single stripe, so are solid', async (done: DoneFn) => {
		appState.controls.currentFrame = to.Frame(0)

		executeSelectedEffects.default({ overrides })

		setTimeout(() => {
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 0, 0 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 1, 1 ]) })

			done()
		},         0)
	})

	it('around frame 500, it has two harmonically proportioned stripes', async (done: DoneFn) => {
		appState.controls.currentFrame = to.Frame(500)

		executeSelectedEffects.default({ overrides })

		setTimeout(() => {
			expectHarmonicStripedTile({ stripeCount: 2, color: TRANSPARENT, diagonalAddress: 0 })
			expectHarmonicStripedTile({ stripeCount: 2, color: BLACK, diagonalAddress: 1 })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })
			done()
		},         0)
	})

	it('around frame 1000, it has three harmonically proportioned stripes', async (done: DoneFn) => {
		appState.controls.currentFrame = to.Frame(1000)

		executeSelectedEffects.default({ overrides })

		setTimeout(() => {
			expectHarmonicStripedTile({ stripeCount: 3, color: TRANSPARENT, diagonalAddress: 0 })
			expectHarmonicStripedTile({ stripeCount: 3, color: BLACK, diagonalAddress: 1 })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })

			done()
		},         0)
	})

	it('around frame 1250, it has four harmonically proportioned stripes', async (done: DoneFn) => {
		appState.controls.currentFrame = to.Frame(1250)

		executeSelectedEffects.default({ overrides })

		setTimeout(() => {
			expectHarmonicStripedTile({ stripeCount: 4, color: TRANSPARENT, diagonalAddress: 0 })
			expectHarmonicStripedTile({ stripeCount: 4, color: BLACK, diagonalAddress: 1 })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })

			done()
		},         0)
	})

	it('around frame 1500, it has five harmonically proportioned stripes', async (done: DoneFn) => {
		appState.controls.currentFrame = to.Frame(1500)

		executeSelectedEffects.default({ overrides })

		setTimeout(() => {
			expectHarmonicStripedTile({ stripeCount: 5, color: TRANSPARENT, diagonalAddress: 0 })
			expectHarmonicStripedTile({ stripeCount: 5, color: BLACK, diagonalAddress: 1 })
			expectWholeTile({ color: BLACK, gridAddress: to.Address([ 0, 1 ]) })
			expectWholeTile({ color: TRANSPARENT, gridAddress: to.Address([ 1, 0 ]) })

			done()
		},         0)
	})
})
