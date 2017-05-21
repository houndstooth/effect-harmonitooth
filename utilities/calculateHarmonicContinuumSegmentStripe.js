import inverseTriangularNumber from '../../shared/utilities/inverseTriangularNumber'
import triangularNumber from '../../shared/utilities/triangularNumber'

export default ({ stripeCount, stripeIndex }) => {
    const previous = stripeCount - 1
	const tri = triangularNumber(previous)
	const current = inverseTriangularNumber(tri + stripeIndex)
	return current - previous
}
