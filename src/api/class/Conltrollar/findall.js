const Service = require("../../../models/class");

const findAll = async (req, res) => {
    const filter = req.query;
    const cursor = await Service.find(filter)
    res.send(cursor)
}


module.exports = findAll
