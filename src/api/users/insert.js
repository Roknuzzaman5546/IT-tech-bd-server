const users = require("../../models/user");

const insertall = async (req, res) => {
    const userInfo = req.body;
    const user = new users({
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
        role: req.body.role
    });
    const query = { email: userInfo.email }
    const existingUser = await users.findOne(query)
    if (existingUser) {
        return res.send({ message: "existing already added", insertedId: null })
    }
    const result = await user.save()
    console.log(result)
    res.send(result)
}

module.exports = insertall;