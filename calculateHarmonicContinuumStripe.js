import triangularNumbers from './triangularNumbers'

export default ({ stripeCount, stripeIndex }) => {
	const { triangularRoot } = triangularNumbers
	return triangularRoot(stripeIndex) / triangularRoot(stripeCount)
}
