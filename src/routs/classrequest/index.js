const classapprove = require('../../api/classrequest/classapprove');
const classrejected = require('../../api/classrequest/classrejected');
const classreqfind = require('../../api/classrequest/classrequestfindall');
const classrequestinsert = require('../../api/classrequest/classrequestinsert');

const router = require('express').Router();


router.post('/classrequest', classrequestinsert)
router.get('/classrequest', classreqfind)
router.post('/classrequest/approve', classapprove)
router.post('/classrequest/rejected', classrejected)

module.exports = router; 