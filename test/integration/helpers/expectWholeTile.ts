import { Address, Color, to } from '../../../../../src'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import { pixelIsColorWithMarker } from '../../../../../test/integration/helpers/pixelIsColorWithMarker'

const expectWholeTile: (_: {
	color: Color, gridAddress: Address,
}) => void = ({ color: expectedColor, gridAddress }) => {
	iterator(12).forEach(check => {
		const coordinateUnderTest = to.Coordinate([
			(gridAddress[ 0 ] + check / 12) * 50,
			(gridAddress[ 1 ] + check / 12) * 50,
		])
		expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: check })).toBe(true)
	})
}

export { expectWholeTile }
