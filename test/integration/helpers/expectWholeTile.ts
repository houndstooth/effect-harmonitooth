import { Address, Color, Coordinate } from '../../../../../src'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import pixelIsColorWithMarker from '../../../../../test/integration/helpers/pixelIsColorWithMarker'

interface ExpectWholeTile { ({}: { color: Color, gridAddress: Address }): void }

const expectWholeTile: ExpectWholeTile = ({ color: expectedColor, gridAddress }) => {
	iterator(12).forEach(check => {
		const coordinateUnderTest = [
			(gridAddress[ 0 ] + check / 12) * 50 as any,
			(gridAddress[ 1 ] + check / 12) * 50 as any,
		] as Coordinate
		expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: check })).toBe(true)
	})
}

export default expectWholeTile
