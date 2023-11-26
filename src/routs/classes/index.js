const findAll = require("../../api/class/Conltrollar/findall");
const router = require('express').Router();

router.get('/class', findAll)

module.exports = router