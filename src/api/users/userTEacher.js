const users = require("../../models/user")

const userTeacher = async (req, res) => {
    const result = await users.updateOne({ role: 'teacher' })
    res.send(result)
}

module.exports = userTeacher