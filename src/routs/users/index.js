const router = require('express').Router();
const isadmin = require('../../api/isadmin/isadmin');
const isteacher = require('../../api/isteacher/isteacher');
const insertall = require('../../api/users/insert');
const userTeacher = require('../../api/users/userTEacher');
const useradminmake = require('../../api/users/useradminmake');
const userfind = require('../../api/users/userfind');
const usermakestudent = require('../../api/users/usermakestudent');
const verifytoken = require('../../midilwares/verifytoken');

router.post('/users', insertall)
router.post('/users/admin', useradminmake)
router.post('/users/student', usermakestudent)
router.post('/users/teacher', userTeacher)
router.get('/users', userfind)
router.get('/users/admin/:email', verifytoken, isadmin)
router.get('/users/teacher/:email', verifytoken, isteacher)


module.exports = router
