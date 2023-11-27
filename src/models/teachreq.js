const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const teachreqSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const techrequest = mongoose.model("teachreq", teachreqSchema);
module.exports = techrequest