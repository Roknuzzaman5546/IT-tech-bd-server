const techrequest = require("../../models/teachreq");

const techinsert = async (req, res) => {
    const user = new techrequest({
        name: req.body.name,
        image: req.body.image,
        experience: req.body.experience,
        title: req.body.title,
        email: req.body.email,
        category: req.body.category,
        status: req.body.status
    });
    const result = await user.save()
    res.send(result)
}

module.exports = techinsert;