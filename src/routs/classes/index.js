const classinsert = require("../../api/class/Conltrollar/classinsert");
const findAll = require("../../api/class/Conltrollar/findall");
const router = require('express').Router();

router.get('/class', findAll)
router.post('/class', classinsert)

module.exports = router