import triangularNumbers from '../shared/utilities/triangularNumbers'

export default ({ stripeCount, stripeIndex }) => {
	const { inverseTriangularNumber } = triangularNumbers
	return inverseTriangularNumber(stripeIndex) / inverseTriangularNumber(stripeCount)
}
