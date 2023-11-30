const classrequest = require("../../models/classrequest");

const classrequestinsert = async (req, res) => {
    const user = new classrequest({
        name: req.body.name,
        email: req.body.email,
        img: req.body.img,
        title: req.body.title,
        price: req.body.price,
        shortDescription: req.body.shortDescription,
        totalEnrolment: req.body.totalEnrolment,
        status: req.body.status
    });
    const result = await user.save()
    res.send(result)
}

module.exports = classrequestinsert;