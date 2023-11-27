const techinsert = require('../../api/techreq/techinsert');
const router = require('express').Router();

router.post('/teacherreq', techinsert)

module.exports = router