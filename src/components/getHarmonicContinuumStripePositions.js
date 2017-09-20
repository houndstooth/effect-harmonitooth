import { triangularRoot } from '../../../../src/utilities/mathUtilities'
import src from '../../../../src'

export default () => src.perStripe({ getStripePosition: harmonicContinuumStripePosition })

const harmonicContinuumStripePosition = ({ stripeIndex, stripeCount }) => triangularRoot(stripeIndex) / triangularRoot(stripeCount)