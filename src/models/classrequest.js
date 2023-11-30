const { model, Schema } = require("mongoose");

const classrequestSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    shortDescription: {
        type: String,
        require: true
    },
    totalEnrolment: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
})

const classrequest = model("clasrequest", classrequestSchema)
module.exports = classrequest
