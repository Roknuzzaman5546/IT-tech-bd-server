const classrequest = require("../../models/classrequest");

const classreqfind = async (req, res) => {
    const filter = req.query;
    const cursor = await classrequest.find(filter)
    res.send(cursor)
}

module.exports = classreqfind