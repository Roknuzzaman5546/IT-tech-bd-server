const users = require("../../models/user");


const useradminmake = async (req, res) => {
    // const id = req.params.id;
    // console.log(id)
    // const filter = { _id: new (id) }
    // const updatedoc = {
    //     $set: { role: 'admin' }
    // }
    const result = await users.updateOne({ role: 'admin' })
    res.send(result)
}

module.exports = useradminmake;