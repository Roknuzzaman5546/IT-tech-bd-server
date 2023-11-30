const teacherupdatestatus = require('../../api/techreq/teacherupdatestatus');
const techfind = require('../../api/techreq/techfind');
const techinsert = require('../../api/techreq/techinsert');
const teacherrejected = require('../../api/techreq/updatereject');
const router = require('express').Router();

router.post('/teacherreq', techinsert)
router.get('/teacherreq', techfind)
router.post('/teacherreq/acchept', teacherupdatestatus)
router.post('/teacherreq/reject', teacherrejected)


module.exports = router