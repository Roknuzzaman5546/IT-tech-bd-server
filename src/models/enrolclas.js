const { model, Schema } = require("mongoose");

const EnrollclassSchema = new Schema({
    studentname: {
        type: String,
        require: true
    },
    studentimage: {
        type: String,
        require: true
    },
    studnetemail: {
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
    prcie: {
        type: Number,
        require: true
    },
    shortDescription: {
        type: String,
        require: true
    },
    totalEnrolment: {
        type: Number,
        require: true
    }
})

const enrolclass = model("enrolclass", EnrollclassSchema)
module.exports = enrolclass
