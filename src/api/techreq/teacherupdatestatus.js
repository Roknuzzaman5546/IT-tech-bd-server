const techrequest = require("../../models/teachreq")


const teacherupdatestatus = async (req, res) => {
    const { id } = req.body
    const result = await techrequest.updateOne({ _id: id }, { status: 'accepted' })
    res.send(result)
}

module.exports = teacherupdatestatus