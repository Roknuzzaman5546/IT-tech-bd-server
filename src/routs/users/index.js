const router = require('express').Router();
const insertall = require('../../api/users/insert');

router.post('/users', insertall)

module.exports = router
