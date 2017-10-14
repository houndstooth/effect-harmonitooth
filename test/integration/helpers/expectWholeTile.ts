import pixelIsColorWithMarker from '../../../../../test/integration/helpers/pixelIsColorWithMarker'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import { Address } from '../../../../../src'
import { Color } from '../../../../../src'

type ExpectWholeTile = { ({}: { color: Color, gridAddress: Address }): void }

const expectWholeTile: ExpectWholeTile = ({ color: expectedColor, gridAddress }) => {
	iterator(12).forEach(check => {
		const coordinateUnderTest = [ 50 * (gridAddress[ 0 ] + check / 12), 50 * (gridAddress[ 1 ] + check / 12) ]
		expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: check })).toBe(true)
	})
}

export default expectWholeTile
