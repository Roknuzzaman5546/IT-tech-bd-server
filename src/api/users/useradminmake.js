const { isValidObjectId } = require("mongoose");
const users = require("../../models/user");


const useradminmake = async (req, res) => {
    const { id } = req.body;
    const result = await users.updateOne({ _id: id }, { role: 'admin' })
    res.send(result)
}

module.exports = useradminmake;