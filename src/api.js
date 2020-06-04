const express = require('express')
var cors = require('cors')
const { Router } = express
import { addConnectionToRequest }  from './lib/connectionMiddleware'

const router = new Router()
router.use(cors())
router.use('/config', addConnectionToRequest, require('./api/config'))
router.use('/extensions', addConnectionToRequest, require('./api/extensions'))
router.use('/query', addConnectionToRequest, require('./api/query'))
router.use('/schemas', addConnectionToRequest, require('./api/schemas'))
router.use('/tables', addConnectionToRequest, require('./api/tables'))
router.use('/types', addConnectionToRequest, require('./api/types'))
router.use('/users', addConnectionToRequest, require('./api/users'))

module.exports = router
