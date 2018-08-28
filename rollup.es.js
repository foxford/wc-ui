import { es } from './rollup.config'

export default ((entry = 'index') => entry.split(',').map(es))(process.env.ENTRY)
