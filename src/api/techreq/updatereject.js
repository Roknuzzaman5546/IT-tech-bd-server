const techrequest = require("../../models/teachreq")

const teacherrejected = async (req, res) => {
    const { id } = req.body
    const result = await techrequest.updateOne({ _id: id }, { status: 'rejected' })
    res.send(result)
}

module.exports = teacherrejected