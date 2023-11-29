const router = require('express').Router();
const enrolclassfind = require('../../api/enrolclass/enrollget');
const enrollinsert = require('../../api/enrolclass/enrollinsert');

router.post('/enrolclass', enrollinsert)
router.get('/enrolclass',  enrolclassfind)

module.exports = router