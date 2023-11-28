const jwt = require('jsonwebtoken')
require('dotenv').config();

const verifytoken = (req, res, next) => {
    console.log('access token', req.headers.authorization)
    if (!req.headers.authorization) {
        return res.status(401).send({ message: "forbidden access" })
    }
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'forbidden access' })
        }
        req.decoded = decoded;
        next();
    })
}