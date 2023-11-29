const users = require("../../models/user");



const isStudent = async (req, res) => {
    const email = req.params.email;
    if (email !== req.decoded?.email) {
        return res.status(401).send({ message: 'unathourized access' })
    }
    const query = { email: email }
    const user = await users.findOne(query)
    console.log(user)
    let student = false;
    if (user) {
        student = user.role === 'student'
    }
    res.send({ student })
}

module.exports = isStudent