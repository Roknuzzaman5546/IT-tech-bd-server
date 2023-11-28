const users = require("../../models/user");


const useradminmake = async (req, res) => {
    const result = await users.updateOne({ role: 'admin' })
    res.send(result)
}

module.exports = useradminmake;