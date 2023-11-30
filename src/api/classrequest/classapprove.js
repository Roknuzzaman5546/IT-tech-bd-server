const classrequest = require("../../models/classrequest")


const classapprove = async (req, res) => {
    const { id } = req.body
    const result = await classrequest.updateOne({ _id: id }, { status: 'accepted' })
    res.send(result)
}

module.exports = classapprove