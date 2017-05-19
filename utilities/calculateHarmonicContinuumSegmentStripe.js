import inverseTriangularNumber from '../../shared/utilities/inverseTriangularNumber'
import triangularNumber from '../../shared/utilities/triangularNumber'

export default ({ stripeCount, stripeIndex }) => {
	const tri = triangularNumber(stripeCount - 1)
	const previous = inverseTriangularNumber(tri)
	const current = inverseTriangularNumber(tri + stripeIndex)
	return current - previous
}