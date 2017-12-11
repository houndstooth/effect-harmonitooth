import { codeUtilities, Color, constants, Coordinate } from '../../../../../src/indexForTest'
import { pixelIsColorWithMarker } from '../../../../../test'
import harmonicStripeCenter from './harmonicStripeCenter'
import { ExpectHarmonicStripedTileParams } from './types'

const { BLACK, TRANSPARENT } = constants

const expectHarmonicStripedTile: (_: ExpectHarmonicStripedTileParams) => void =
	({ color, diagonalAddress, stripeCount }: ExpectHarmonicStripedTileParams): void => {
		codeUtilities.iterator(stripeCount, { oneIndexed: true }).forEach((stripe: number) => {
			const expectedColor: Color = stripe % 2 === 1 ? color : color === BLACK ? TRANSPARENT : BLACK
			const coordinateUnderTest: Coordinate = harmonicStripeCenter({
				diagonalAddress,
				index: stripe,
				total: stripeCount,
			})
			expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: stripe })).toBe(true)
		})
	}

export default expectHarmonicStripedTile
