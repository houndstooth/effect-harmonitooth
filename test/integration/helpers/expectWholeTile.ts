import { Address, Color, from, to } from '../../../../../src'
import { Coordinate } from '../../../../../src/space/types'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import { pixelIsColorWithMarker } from '../../../../../test/integration/helpers/pixelIsColorWithMarker'

const expectWholeTile: (_: { color: Color, gridAddress: Address }) => void =
	({ color: expectedColor, gridAddress }: { color: Color, gridAddress: Address }): void => {
		iterator(12).forEach((check: number) => {
			const [ x, y ]: number[] = from.Address(gridAddress)
			const coordinateUnderTest: Coordinate = to.Coordinate([
				(x + check / 12) * 50,
				(y + check / 12) * 50,
			])
			expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: check })).toBe(true)
		})
	}

export { expectWholeTile }
