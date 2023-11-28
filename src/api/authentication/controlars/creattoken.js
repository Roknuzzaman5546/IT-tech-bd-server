const jwt = require('jsonwebtoken')
require('dotenv').config();

const creatToken = async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '1hr' })
    res.send({ token })
}

module.exports = creatToken