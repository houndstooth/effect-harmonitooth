import triangularNumbers from '../shared/utilities/triangularNumbers'

export default ({ stripeCount, stripeIndex }) => {
	const { triangularNumber, inverseTriangularNumber } = triangularNumbers
	const previous = stripeCount - 1
	const tri = triangularNumber(previous)
	const current = inverseTriangularNumber(tri + stripeIndex)
	return current - previous
}
