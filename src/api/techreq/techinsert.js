const techrequest = require("../../models/teachreq");

const techinsert = async (req, res) => {
    const user = new techrequest({
        name: req.body.name,
        image: req.body.image,
        experience: req.body.experience,
        title: req.body.title,
        category: req.body.category
    });
    const result = await user.save()
    res.send(result)
}

module.exports = techinsert;