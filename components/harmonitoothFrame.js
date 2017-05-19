import grid from '../../shared/components/grid'
import harmonitoothTile from './harmonitoothTile'

export default ({ stripeCount }) => grid({ tile: harmonitoothTile, options: { stripeCount } })