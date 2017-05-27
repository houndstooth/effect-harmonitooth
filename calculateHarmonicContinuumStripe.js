import triangularNumbers from '../shared/utilities/triangularNumbers'

export default ({ stripeCount, stripeIndex }) => {
	const { triangularRoot } = triangularNumbers
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}
