const Service = require("../../../models/class");
 
const findAll = async (req, res) => {
    const cursor = await Service.find()
    res.send(cursor)
}


module.exports = findAll
