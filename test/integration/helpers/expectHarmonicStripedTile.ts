import { Color } from '../../../../../src'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import pixelIsColorWithMarker from '../../../../../test/integration/helpers/pixelIsColorWithMarker'
import harmonicStripeCenter from './harmonicStripeCenter'

type ExpectHarmonicStripedTile = { ({}: { color: Color, diagonalAddress: number, stripeCount: number }): void }

const expectHarmonicStripedTile: ExpectHarmonicStripedTile = ({ color, diagonalAddress, stripeCount }) => {
	iterator(stripeCount, { oneIndexed: true }).forEach(stripe => {
		const expectedColor = stripe % 2 === 1 ? color : color === BLACK ? TRANSPARENT : BLACK
		const coordinateUnderTest = harmonicStripeCenter({ index: stripe, total: stripeCount, diagonalAddress })
		expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: stripe })).toBe(true)
	})
}

export default expectHarmonicStripedTile
