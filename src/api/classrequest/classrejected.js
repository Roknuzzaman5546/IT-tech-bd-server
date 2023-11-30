const classrequest = require("../../models/classrequest")


const classrejected = async (req, res) => {
    const { id } = req.body
    const result = await classrequest.updateOne({ _id: id }, { status: 'rejected' })
    res.send(result)
}

module.exports = classrejected