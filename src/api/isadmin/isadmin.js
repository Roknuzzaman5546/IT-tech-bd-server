const users = require("../../models/user");


const isadmin = async  (req, res) => {
    const email = req.params.email;
    if (email !== req.decoded?.email) {
        return res.status(401).send({ message: 'unathourized access' })
    }
    const query = { email: email }
    const user = await users.findOne(query)
    let admin = false;
    if (user) {
        admin = user.role === 'admin'
    }
    res.send({ admin })
}

module.exports = isadmin