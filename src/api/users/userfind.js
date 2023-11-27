const users = require("../../models/user");

const userfind = async (req, res) => {
    const filter = req.query;
    const cursor = await users.find(filter)
    res.send(cursor)
}

module.exports = userfind