var express = require('express')
const creatToken = require('../../api/authentication/controlars/creattoken')
var router = express.Router()

router.post('/jwt', creatToken)

module.exports = router