import { Coordinate } from '../../../../../src'
import * as from from '../../../../../src/from'
import { Unit } from '../../../../../src/pattern/grid/types'
import * as to from '../../../../../src/to'
import { iterator } from '../../../../../src/utilities/codeUtilities'

interface HarmonicStripeCenterParams {
	diagonalAddress: number,
	index: number,
	total: number
}

const harmonicStripeCenter: (_: HarmonicStripeCenterParams) => Coordinate =
	({ diagonalAddress, index, total }: HarmonicStripeCenterParams): Coordinate => {
		const fullProportions: number = iterator(total).reduce(proportions, 0)
		const thisProportion: number = iterator(index).reduce(proportions, 0)
		const adjustForHalf: number = 1 / ((index + 2) * 2)
		const units: Unit = to.Unit((thisProportion - adjustForHalf) / fullProportions)
		const unitsScaledAndTransposed: Unit = to.Unit((diagonalAddress + from.Unit(units)) * 50)

		return to.Coordinate([ unitsScaledAndTransposed, unitsScaledAndTransposed ])
	}

const proportions: (sum: number, val: number) => number =
	(sum: number, val: number): number => sum + 1 / (val + 2)

export { harmonicStripeCenter }
