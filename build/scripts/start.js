const logger = require('../lib/logger')

logger.info('Starting server...')
require('../../server/main').listen(8000, () => {
  logger.success('Server is running at http://localhost:8000')
})
