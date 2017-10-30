import { Color } from '../../../../../src'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { Coordinate } from '../../../../../src/space/types'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import { pixelIsColorWithMarker } from '../../../../../test/integration/helpers/pixelIsColorWithMarker'
import { harmonicStripeCenter } from './harmonicStripeCenter'

interface ExpectHarmonicStripedTileParams { color: Color, diagonalAddress: number, stripeCount: number }

const expectHarmonicStripedTile: (_: ExpectHarmonicStripedTileParams) => void =
	({ color, diagonalAddress, stripeCount }: ExpectHarmonicStripedTileParams): void => {
		iterator(stripeCount, { oneIndexed: true }).forEach((stripe: number) => {
			const expectedColor: Color = stripe % 2 === 1 ? color : color === BLACK ? TRANSPARENT : BLACK
			const coordinateUnderTest: Coordinate = harmonicStripeCenter({
				diagonalAddress,
				index: stripe,
				total: stripeCount,
			})
			expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: stripe })).toBe(true)
		})
	}

export { expectHarmonicStripedTile }
