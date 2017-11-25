import { Address, codeUtilities, Color, Coordinate, from, to } from '../../../../../src'
import { pixelIsColorWithMarker } from '../../../../../test'

const expectWholeTile: (_: { color: Color, gridAddress: Address }) => void =
	({ color: expectedColor, gridAddress }: { color: Color, gridAddress: Address }): void => {
		codeUtilities.iterator(12).forEach((check: number) => {
			const [ x, y ]: number[] = from.Address(gridAddress)
			const coordinateUnderTest: Coordinate = to.Coordinate([
				(x + check / 12) * 50,
				(y + check / 12) * 50,
			])
			expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: check })).toBe(true)
		})
	}

export { expectWholeTile }
