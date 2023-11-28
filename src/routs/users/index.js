const router = require('express').Router();
const insertall = require('../../api/users/insert');
const userTeacher = require('../../api/users/userTEacher');
const useradminmake = require('../../api/users/useradminmake');
const userfind = require('../../api/users/userfind');

router.post('/users', insertall)
router.get('/users', userfind)
router.patch('/users/admin/:id', useradminmake)
router.patch('/users/teacher/:email', userTeacher)


module.exports = router
