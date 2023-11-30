const { model, Schema } = require("mongoose");

const ClasseSchema = new Schema({
    "title": {
        type: String,
        require: true
    },
    "name": {
        type: String,
        require: true
    },
    "img": {
        type: String,
        require: true
    },
    "prcie": {
        type: Number,
        require: true
    },
    "shortDescription": {
        type: String,
        require: true
    },
    "totalEnrolment": {
        type: Number,
        require: true
    }
})

const Service = model("Classes", ClasseSchema)
module.exports = Service
