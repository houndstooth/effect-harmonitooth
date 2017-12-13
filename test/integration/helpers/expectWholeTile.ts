import { Address, codeUtilities, Color, Coordinate, from, to } from '../../../../../src/indexForTest'
import { pixelIsColorWithMarker } from '../../../../../test'

const expectWholeTile: (_: { address: Address, color: Color }) => void =
	({ address, color: expectedColor }: { address: Address, color: Color }): void => {
		codeUtilities.iterator(12).forEach((check: number) => {
			const [ x, y ]: number[] = from.Address(address)
			const coordinateUnderTest: Coordinate = to.Coordinate([
				(x + check / 12) * 50,
				(y + check / 12) * 50,
			])
			expect(pixelIsColorWithMarker({ coordinateUnderTest, expectedColor, id: check })).toBe(true)
		})
	}

export default expectWholeTile
