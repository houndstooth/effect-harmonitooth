import mathUtilities from '../../utilities/mathUtilities'

export default ({ stripeCount, stripeIndex }) => {
	const { triangularRoot } = mathUtilities
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}
