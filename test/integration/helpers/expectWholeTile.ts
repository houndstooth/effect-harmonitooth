import { Address, Color, Coordinate } from '../../../../../src'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import pixelIsColorWithMarker from '../../../../../test/integration/helpers/pixelIsColorWithMarker'

type ExpectWholeTile = { ({}: { color: Color, gridAddress: Address }): void }

const expectWholeTile: ExpectWholeTile = ({ color: expectedColor, gridAddress }) => {
	iterator(12).forEach(check => {
		const coordinateUnderTest = [
			50 * (gridAddress[ 0 ] + check / 12) as any,
			50 * (gridAddress[ 1 ] + check / 12) as any,
		] as Coordinate
		expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: check })).toBe(true)
	})
}

export default expectWholeTile
