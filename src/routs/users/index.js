const router = require('express').Router();
const insertall = require('../../api/users/insert');
const useradminmake = require('../../api/users/useradminmake');
const userfind = require('../../api/users/userfind');

router.post('/users', insertall)
router.get('/users', userfind)
router.patch('/users/:id', useradminmake)


module.exports = router
