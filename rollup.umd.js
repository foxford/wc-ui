import { dist } from './rollup.config'

export default ((entry = 'dist') => entry.split(',').map(it => dist(it)))(process.env.ENTRY)
