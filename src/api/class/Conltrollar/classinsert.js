const Service = require("../../../models/class");

const classinsert = async (req, res) => {
    const user = new Service({
        name: req.body.name,
        img: req.body.img,
        prcie: req.body.prcie,
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        totalEnrolment: req.body.totalEnrolment
    });
    const result = await user.save()
    res.send(result)
}

module.exports = classinsert