import { Address, Color } from '../../../../../src'
import * as from from '../../../../../src/from'
import { Coordinate } from '../../../../../src/pattern/stripe/types'
import * as to from '../../../../../src/to'
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
