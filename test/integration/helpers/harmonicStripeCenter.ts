import { iterator } from '../../../../../src/utilities/codeUtilities'
import { Coordinate } from '../../../../../src'

type HarmonicStripeCenter = {({}: { index: number, total: number, diagonalAddress: number }): Coordinate}

const harmonicStripeCenter: HarmonicStripeCenter = ({ index, total, diagonalAddress }) => {
	const fullProportions = iterator(total).reduce((sum, val) => sum + 1 / (val + 2), 0)
	const thisProportion = iterator(index).reduce((sum, val) => sum + 1 / (val + 2), 0)
	const adjustForHalf = 1 / ((index + 2) * 2)
	const coordinate = (thisProportion - adjustForHalf) / fullProportions
	const coordinateScaledAndTransposed = (diagonalAddress + coordinate) * 50

	return [ coordinateScaledAndTransposed as any, coordinateScaledAndTransposed as any ] as Coordinate
}

export default harmonicStripeCenter
