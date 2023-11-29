const enrolclass = require("../../models/enrolclas");
const users = require("../../models/user");

const enrollinsert = async (req, res) => {
    const enroll = new enrolclass({
        studentname: req.body.studentname,
        studentimage: req.body.studentimage,
        studnetemail: req.body.studnetemail,
        img: req.body.img,
        name: req.body.name,
        price: req.body.price,
        shortDescription: req.body.shortDescription,
        totalEnrolment: req.body.totalEnrolment
    });
    const result = await enroll.save()
    console.log(result)
    res.send(result)
}

module.exports = enrollinsert;