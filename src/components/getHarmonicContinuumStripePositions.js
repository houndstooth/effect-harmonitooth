import { triangularRoot } from '../../../../src/utilities/mathUtilities'
import { perStripe } from '../../../../src'

export default () => perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) => triangularRoot(stripeIndex) / triangularRoot(stripeCount)
