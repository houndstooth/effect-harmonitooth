import triangularNumbers from './triangularNumbers'

export default ({ stripeCount, stripeIndex }) => {
	const { triangularNumber, triangularRoot } = triangularNumbers
	const previous = stripeCount - 1
	const tri = triangularNumber(previous)
	const current = triangularRoot(tri + stripeIndex)
	return current - previous
}
