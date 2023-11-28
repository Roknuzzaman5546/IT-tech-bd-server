const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const ApproveSchema = new Schema({
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
    status: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const approveTeacher = mongoose.model("teachers", ApproveSchema);
module.exports = approveTeacher