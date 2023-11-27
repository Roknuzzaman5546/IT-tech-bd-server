const techfind = require('../../api/techreq/techfind');
const techinsert = require('../../api/techreq/techinsert');
const router = require('express').Router();

router.post('/teacherreq', techinsert)
router.get('/teacherreq', techfind)


module.exports = router