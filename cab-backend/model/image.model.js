const mongoose = require("mongoose")



const Image = mongoose.model("Image", mongoose.Schema({
    own: mongoose.Schema.Types.ObjectId,
    type: {
        type: String,
        enum: ["profile","driver","vehicle"]
    },
    path: {
        type: String,
        required: true
    }
}))





module.exports = Image
