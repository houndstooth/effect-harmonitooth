import { Address, Color, from, to } from '../../../../../src'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import { pixelIsColorWithMarker } from '../../../../../test/integration/helpers/pixelIsColorWithMarker'

const expectWholeTile: (_: {
	color: Color, gridAddress: Address,
}) => void = ({ color: expectedColor, gridAddress }) => {
	iterator(12).forEach(check => {
		const [ x, y ] = from.Address(gridAddress)
		const coordinateUnderTest = to.Coordinate([
			(x + check / 12) * 50,
			(y + check / 12) * 50,
		])
		expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: check })).toBe(true)
	})
}

export { expectWholeTile }
