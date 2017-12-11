import { Color } from '../../../../../src/indexForTest'

interface ExpectHarmonicStripedTileParams { color: Color, diagonalAddress: number, stripeCount: number }

type HarmonicStripeProportions = (sum: number, val: number) => number

interface HarmonicStripeCenterParams {
	diagonalAddress: number,
	index: number,
	total: number
}

export {
	ExpectHarmonicStripedTileParams,
	HarmonicStripeProportions,
	HarmonicStripeCenterParams,
}
