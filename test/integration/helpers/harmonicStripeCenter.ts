import { codeUtilities, Coordinate, from, to, Unit } from '../../../../../src'

interface HarmonicStripeCenterParams {
	diagonalAddress: number,
	index: number,
	total: number
}

const harmonicStripeCenter: (_: HarmonicStripeCenterParams) => Coordinate =
	({ diagonalAddress, index, total }: HarmonicStripeCenterParams): Coordinate => {
		const fullProportions: number = codeUtilities.iterator(total).reduce(proportions, 0)
		const thisProportion: number = codeUtilities.iterator(index).reduce(proportions, 0)
		const adjustForHalf: number = 1 / ((index + 2) * 2)
		const units: Unit = to.Unit((thisProportion - adjustForHalf) / fullProportions)
		const unitsScaledAndTransposed: Unit = to.Unit((diagonalAddress + from.Unit(units)) * 50)

		return to.Coordinate([ unitsScaledAndTransposed, unitsScaledAndTransposed ])
	}

const proportions: (sum: number, val: number) => number =
	(sum: number, val: number): number => sum + 1 / (val + 2)

export { harmonicStripeCenter }
