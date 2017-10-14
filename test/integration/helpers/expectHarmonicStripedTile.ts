import { iterator } from '../../../../../src/utilities/codeUtilities'
import pixelIsColorWithMarker from '../../../../../test/integration/helpers/pixelIsColorWithMarker'
import harmonicStripeCenter from './harmonicStripeCenter'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { Color } from '../../../../../src'

type ExpectHarmonicStripedTile = { ({}: { stripeCount: number, color: Color, diagonalAddress: number }): void }

const expectHarmonicStripedTile: ExpectHarmonicStripedTile = ({ stripeCount, color, diagonalAddress }) => {
	iterator(stripeCount, { oneIndexed: true }).forEach(stripe => {
		const expectedColor = stripe % 2 === 1 ? color : color === BLACK ? TRANSPARENT : BLACK
		const coordinateUnderTest = harmonicStripeCenter({ index: stripe, total: stripeCount, diagonalAddress })
		expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: stripe })).toBe(true)
	})
}

export default expectHarmonicStripedTile
