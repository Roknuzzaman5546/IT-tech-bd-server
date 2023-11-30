const users = require("../../models/user");



const isteacher = async (req, res) => {
    const email = req.params.email;
    if (email !== req.decoded?.email) {
        return res.status(401).send({ message: 'unathourized access' })
    }
    const query = { email: email }
    const user = await users.findOne(query)
    let teacher = false;
    if (user) {
        teacher = user.role === 'teacher'
    }
    res.send({ teacher })
}

module.exports = isteacher