const users = require("../../models/user")

const userTeacher = async (req, res) => {
    const { email } = req.body;
    const result = await users.updateOne({ email: email }, { role: 'teacher' })
    res.send(result)
}

module.exports = userTeacher