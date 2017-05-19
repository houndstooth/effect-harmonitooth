import inverseTriangularNumber from '../../shared/utilities/inverseTriangularNumber'

export default ({ stripeCount, stripeIndex }) => inverseTriangularNumber(stripeIndex) / inverseTriangularNumber(stripeCount)