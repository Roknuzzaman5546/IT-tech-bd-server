const techrequest = require("../../models/teachreq");

const techfind = async (req, res) => {
    const filter = req.query;
    const cursor = await techrequest.find(filter)
    res.send(cursor)
}

module.exports = techfind