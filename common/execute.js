import { FRAME_RATE } from '../../shared/common/customize'
import { STRIPE_COUNT_INCREASE_RATE } from '../common/customize'
import harmonitoothFrame from '../components/harmonitoothFrame'

export default () => {
	let stripeCount = 1
	setInterval(() => {
		stripeCount *= STRIPE_COUNT_INCREASE_RATE
		console.log(stripeCount)
		harmonitoothFrame({ stripeCount })
	}, FRAME_RATE)
}