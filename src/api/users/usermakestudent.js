const users = require("../../models/user")

const usermakestudent = async (req, res) => {
    const { id } = req.body
    const result = await users.updateOne({ _id: id }, { role: 'student' })
    res.send(result)
}

module.exports = usermakestudent