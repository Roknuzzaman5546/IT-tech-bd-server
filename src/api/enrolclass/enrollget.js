const enrolclass = require("../../models/enrolclas");

const enrolclassfind = async (req, res) => {
    const filter = req.query;
    const cursor = await enrolclass.find(filter)
    res.send(cursor)
}

module.exports = enrolclassfind